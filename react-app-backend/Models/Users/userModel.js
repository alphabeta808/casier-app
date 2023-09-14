const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../DB_Configuration/index');

const Users = db.define('users', {
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    createdat: {
        type: Sequelize.DATE
    },
    updatedat: {
        type: Sequelize.DATE
    }
}, {
    freezeTableName: true
});

module.exports = Users;