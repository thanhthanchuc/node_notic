module.exports = (sequelize, DataTypes) => {
    const remind = sequelize.define('remind', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
    }, { table: 'reminds' }, { timestamps: false })
    return remind;
}