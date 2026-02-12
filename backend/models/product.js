import { json, Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.hasMany(models.Cart, {
        foreignKey: "productId",
      });
    }
  }
  Product.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(10, 2),
      description: DataTypes.TEXT,
      size: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        get() {
          const value = this.getDataValue("size");
          if (typeof value === "string") {
            try {
              return JSON.parse(value);
            } catch {
              return value;
            }
          }
          return value || [];
        },
      },
      type: {
        type: DataTypes.VIRTUAL(DataTypes.INTEGER),
        get() {
          const size = JSON.parse(this.getDataValue("size"));
          return Array.isArray(size) ? size.length : 0;
        },
      },
      material: DataTypes.STRING,
      images: {
        type: DataTypes.JSON,
        get() {
          const value = this.getDataValue("images");
          if (typeof value === "string") {
            try {
              return JSON.parse(value);
            } catch {
              return value;
            }
          }
          return value || [];
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      timestamps: true,
    },
  );
  return Product;
};
