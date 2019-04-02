'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, TEXT, DATEONLY, DATE } = Sequelize;
    return await queryInterface.createTable('notifications', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING, allowNull: false },
      content: { type: TEXT, allowNull: false },
      type_id: { 
        type: INTEGER,
        references: {
        model: 'typeNotifications',
        key: 'id'
        }
      },
      remind_id: { 
        type: INTEGER, 
        references: {
          model: 'reminds',
          key: 'id'
        }
      },
      deadline: { type: DATE },
      created_at: { type: Sequelize.DATE, defaultValue: Date.now },
      updated_at: { type: Sequelize.DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('notifications')
  }
};
