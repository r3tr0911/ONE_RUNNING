module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    })
    
    User.associate = (models) => {
        User.hasMany(models.Device);
        User.hasMany(models.Workout);
    }
    
    return User;
}