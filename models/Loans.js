"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
var index_1 = require("../Configuration/index");
var Books_1 = require("./Books");
var Members_1 = require("./Members");
var DataTypes = sequel.DataTypes;
var Loan = index_1.default.define('Loan', {
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
    loan_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: false,
});
exports.default = Loan;
