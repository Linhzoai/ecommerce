// migrate-esm.js - Wrapper script to run Sequelize CLI with ES modules support
import { Umzug, SequelizeStorage } from "umzug";
import db from "./models/index.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const umzug = new Umzug({
  migrations: {
    glob: "migrations/*.js",
    resolve: ({ name, path: filepath }) => {
      return {
        name,
        up: async () => {
          const migration = await import(filepath);
          return migration.default.up(
            db.sequelize.getQueryInterface(),
            db.Sequelize,
          );
        },
        down: async () => {
          const migration = await import(filepath);
          return migration.default.down(
            db.sequelize.getQueryInterface(),
            db.Sequelize,
          );
        },
      };
    },
  },
  context: db.sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize: db.sequelize }),
  logger: console,
});

// Get command from args
const command = process.argv[2];

(async () => {
  try {
    switch (command) {
      case "up":
        await umzug.up();
        console.log("✅ Migrations executed successfully");
        break;
      case "down":
        await umzug.down();
        console.log("✅ Migration rolled back successfully");
        break;
      case "pending":
        const pending = await umzug.pending();
        console.log("Pending migrations:", pending);
        break;
      case "executed":
        const executed = await umzug.executed();
        console.log("Executed migrations:", executed);
        break;
      default:
        console.log("Usage: node migrate-esm.js [up|down|pending|executed]");
    }
    process.exit(0);
  } catch (error) {
    console.error("❌ Migration error:", error);
    process.exit(1);
  }
})();
