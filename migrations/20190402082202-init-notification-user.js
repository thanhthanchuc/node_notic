'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('notificationUsers', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      notification_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'notifications',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Date.now },
      updatedAt: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('notificationUsers');
  }
};
