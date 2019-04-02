'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN, DATEONLY } = Sequelize;
    return await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: STRING, allowNull: false },
      email: { type: STRING, allowNull: false, unique: true },
      role: { type: STRING, default: 'user' },
      birthday: { type: DATEONLY, allowNull: false },
      gender: { type: STRING, default: 'Male'},
      address: { type: STRING, allowNull: false },
      phoneNumber: { type: STRING, allowNull: false, unique: true },
      email_verified_at: { type: DATE },
      password: { type: STRING, allowNull: false },
      created_at: { type: DATE, defaultValue: Date.now },
      updated_at: { type: DATE, defaultValue: Date.now }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('users');
  }
};
