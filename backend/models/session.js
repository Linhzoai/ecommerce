import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Session extends Model {
    static associate(models) {
      Session.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Session.init(
    {
      userId: {
        type: DataTypes.UUID,
        field: "userId", 
      },
      refreshToken: {
        type: DataTypes.STRING,
        field: "refreshToken", 
      },
      expired_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Session",
      timestamps: true,
      underscored: true,
    },
  );
  return Session;
};
