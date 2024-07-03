import Sequelize from 'sequelize';
import sequelize from './index.js';

const { DataTypes } = Sequelize;

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
})

export default Author;