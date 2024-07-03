import Sequelize from 'sequelize';
import sequelize from './index.js';
import Book from './Books.js';
import Member from './Members.js';

const { DataTypes } = Sequelize;

const Loan = sequelize.define('Loan', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,  
        primaryKey: true,  
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'id'
        },
    },
    member_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Member,      
            key: 'id'         
        },
    },
    loan_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
})