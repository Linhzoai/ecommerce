import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import { fileURLToPath, pathToFileURL } from "url";
import configFile from "../config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || "development";

const config = configFile[env];
const db = {};

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: process.env.DB_DIALECT ||  "postgres",
    protocol: process.env.DB_PROTOCOL || "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  });
} else {
  // Bật bắt buộc SSL nếu dialect là postgres (phòng hờ config bị thiếu)
  if (config.dialect === 'postgres') {
    config.dialectOptions = {
      ...config.dialectOptions,
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    };
  }

  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const files = fs
  .readdirSync(__dirname)
  .filter((file) => file !== "index.js" && file.endsWith(".js"));

for (const file of files) {
  const filePath = path.join(__dirname, file);
  const { default: model } = await import(pathToFileURL(filePath).href);
  const modelInstance = model(sequelize, Sequelize.DataTypes);
  db[modelInstance.name] = modelInstance;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
