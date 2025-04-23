const { Sequelize } = require("sequelize");

// Creamos una nueva instancia de Sequelize con las variables de entorno
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: "mysql", // ⬅️ este es el dialect que falta
    logging: false
    }
);

module.exports = sequelize;