module.exports = (sequelize, DataTypes) => {
    const { INTEGER, DATE, STRING, DATEONLY } = DataTypes;
    const User =  sequelize.define('User', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: STRING, allowNull: false },
        email: { type: STRING, allowNull: false, unique: true },
        role: { type: STRING, default: 'user' },
        birthday: { type: DATEONLY, allowNull: false },
        gender: { type: STRING, default: 'Male'},
        address: { type: STRING, allowNull: false },
        phoneNumber: { type: STRING, allowNull: false, unique: true },
        email_verified_at: { type: DATE },
        password: { type: STRING, allowNull: false }
    }, {
        tableName: 'users'
    }, {
        timestamps: false
    })
    return User;
}