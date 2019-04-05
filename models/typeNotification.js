module.exports = (sequelize, DataTypes) => {
    const typeNotification = sequelize.define('typeNotification', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
    }, {
        table: 'typeNotifications'
    }, {
        timestamps: false
    })
    return typeNotification;
}