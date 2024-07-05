"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
var index_1 = require("../Configuration/index");
var Books_1 = require("./Books");
var Members_1 = require("./Members");
var DataTypes = sequel.DataTypes;
var Reservation = index_1.default.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Books_1.default,
            key: 'id'
        },
    },
    member_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Members_1.default,
            key: 'id'
        },
    },
    reservation_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
});
exports.default = Reservation;
