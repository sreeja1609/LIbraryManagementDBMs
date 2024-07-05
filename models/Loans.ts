// import Sequelize from 'sequelize';
var sequel = require('sequelize');
import sequelize from '../Configuration/index';
import Book from './Books';
import Member from './Members';

const { DataTypes } = sequel;

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
},{
    timestamps: false,
})

export default Loan;