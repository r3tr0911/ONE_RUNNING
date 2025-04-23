module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('Workout',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        type: DataTypes.STRING,
        duration: DataTypes.INTEGER,
        calories: DataTypes.INTEGER,
        syncedAt: DataTypes.DATE
    });

    Workout.associate = (models) => {
        Workout.belongsTo(models.Device);
        Workout.belongsTo(models.User);
    };

    return Workout;
};