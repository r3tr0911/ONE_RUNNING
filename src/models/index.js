const Sequelize = require('sequelize');
const sequelize = require('../config/db'); 

const db= {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Asignamos modelos directamente al objeto db
db.User = require('./User')(sequelize, Sequelize.DataTypes);
db.Device = require('./Device')(sequelize, Sequelize.DataTypes);
db.Workout = require('./Workout')(sequelize, Sequelize.DataTypes);

db.User.associate(db);
db.Device.associate(db);
db.Workout.associate(db);

module.exports = db;