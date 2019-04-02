'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('typeNotifications', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      created_at: { type: Sequelize.DATE, defaultValue: Date.now },
      updated_at: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('typeNotifications');
  }
};
