// import Sequelize from 'sequelize';
var sequel = require('sequelize')
import sequelize from '../Configuration/index';
import Book from './Books';
import Member from './Members';

const { DataTypes } = sequel;

const Reservation = sequelize.define('Reservation', {
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
    reservation_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},{
    timestamps: false,
})

export default Reservation;