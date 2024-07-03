import Sequelize from 'sequelize';
import sequelize from './index.js';

const { DataTypes } = Sequelize;

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
})

export default Member;