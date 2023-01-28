const Sequelize = require('sequelize');

const db = new Sequelize('casier', 'postgres', 'postgres', {
    host: "localhost",
    dialect: "postgresql",
    define: {
        timestamps: false
    }
});

module.exports = db;
