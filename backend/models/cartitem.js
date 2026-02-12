import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      CartItem.belongsTo(models.Product, {
        foreignKey: 'productId',
      });
    }
  }
  CartItem.init({
    userId: DataTypes.UUID,
    productId: DataTypes.UUID,
    size: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: "cartitems",
  });
  return CartItem;
};