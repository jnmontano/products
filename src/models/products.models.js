const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[5, 255]
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[5, Infinity]
        }
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
})

module.exports = Products

