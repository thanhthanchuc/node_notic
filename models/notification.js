module.exports = (sequelize, DataTypes) => {
    const { INTEGER, STRING, TEXT, DATE } = DataTypes;
    const notification = sequelize.define('notification', {
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
        deadline: { type: DATE }
    }, { table: 'notifications' }, { timestamps: false })
    return notification;
}