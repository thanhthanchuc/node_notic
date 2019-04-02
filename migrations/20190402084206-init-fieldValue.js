'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('fieldValues', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      field_id	: {
        type: Sequelize.INTEGER,
        references: {
          model: 'fields',
          key: 'id'
        }
      },
      option_value: { type:Sequelize.STRING },
      created_at: { type: Sequelize.DATE, defaultValue: Date.now },
      updated_at: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('fieldValues')
  }
};
