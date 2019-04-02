'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('feedbacks', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      field_id	: {
        type: Sequelize.INTEGER,
        references: {
          model: 'fields',
          key: 'id'
        }
      },
      created_at: { type: Sequelize.DATE, defaultValue: Date.now },
      updated_at: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('feedbacks');
  }
};
