'use strict';
//notification,summon,form

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('typeNotifications', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Date.now },
      updatedAt: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('typeNotifications');
  }
};
