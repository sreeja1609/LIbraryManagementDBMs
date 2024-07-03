import Sequelize from 'sequelize';
import sequelize from './index.js';
import Author from './Authors.js';

const { DataTypes } = Sequelize;

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,  
        primaryKey: true,  
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Author,      
            key: 'id'         
        },
    },
    genre: {
        type: DataTypes.STRING(100),
    },
    isbn: {
        type: DataTypes.STRING(13),
        unique: true,
    },
    publication_year: {
        type: DataTypes.INTEGER,
    }
})

export default Book;