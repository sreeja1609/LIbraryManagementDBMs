"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
var index_1 = require("../Configuration/index");
var DataTypes = sequel.DataTypes;
var Member = index_1.default.define('Member', {
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
}, {
    timestamps: false,
});
exports.default = Member;
