
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('USERS','status', Sequelize.STRING) 
      
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'USERS','status');
  }
};