"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
var index_1 = require("../Configuration/index");
var Authors_1 = require("./Authors");
var DataTypes = sequel.DataTypes;
var Book = index_1.default.define('Book', {
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
            model: Authors_1.default,
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
}, {
    timestamps: false,
});
exports.default = Book;
