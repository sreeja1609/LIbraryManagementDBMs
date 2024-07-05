"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
var index_1 = require("../Configuration/index");
var DataTypes = sequel.DataTypes;
var Author = index_1.default.define('Author', {
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
}, {
    timestamps: false,
});
exports.default = Author;
