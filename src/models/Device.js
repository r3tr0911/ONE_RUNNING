module.exports = (Sequelize, DataTypes) => {
    const Device = Sequelize.define('Device',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        status: DataTypes.STRING,
        connectedAt: DataTypes.DATE
    });

    Device.associate = (models) => {
        Device.belongsTo (models.User);
        Device.hasMany(models.Workout);
    };

    return Device;
};