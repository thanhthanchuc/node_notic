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
      createdAt: { type: Sequelize.DATE, defaultValue: Date.now },
      updatedAt: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('fieldValues')
  }
};
