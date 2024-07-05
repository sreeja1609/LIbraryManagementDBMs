// import Sequelize from 'sequelize';
var sequel = require('sequelize')
import sequelize from '../Configuration/index';

const { DataTypes } = sequel;

const Author = sequelize.define('Author', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,  
        primaryKey: true,     
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    birth_year: {
        type: DataTypes.INTEGER,
    },
    nationality: {
        type: DataTypes.STRING(100),
    }
},{
    timestamps: false,
})

export default Author;