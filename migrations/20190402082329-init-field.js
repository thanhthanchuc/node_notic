'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('fields', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      notification_id	: {
        type: Sequelize.INTEGER,
        references: {
          model: 'notifications',
          key: 'id'
        }
      },
      field_name: { type: Sequelize.STRING, allowNull: false },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'typeFields',
          key: 'id'
        }
      },
      createdAt: { type: Sequelize.DATE, defaultValue: Date.now },
      updatedAt: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('fields');
  }
};
