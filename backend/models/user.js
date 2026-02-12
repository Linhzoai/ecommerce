import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Session, {
        foreignKey: "userId",
      });
      User.hasMany(models.Cart, {
        foreignKey: "userId",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
      underscored: true,
    },
  );

  return User;
};
