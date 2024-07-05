// import Sequelize from 'sequelize';
var sequel = require('sequelize')
import sequelize from '../Configuration/index';

const { DataTypes } = sequel;

const Member = sequelize.define('Member', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,  
        primaryKey: true,     
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
    },
    phone_number: {
        type: DataTypes.STRING(20),
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
    }
},{
    timestamps: false,
})

export default Member;