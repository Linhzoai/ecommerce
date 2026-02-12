/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'images', {
      type: Sequelize.JSON,
      defaultValue: [],
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('products', 'images', {
      type: Sequelize.JSON,
      defaultValue: null,
    });
  }
};
