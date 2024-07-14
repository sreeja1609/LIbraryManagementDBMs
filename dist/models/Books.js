"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
const index_1 = __importDefault(require("../Configuration/index"));
const Authors_1 = __importDefault(require("./Authors"));
const { DataTypes } = sequel;
const Book = index_1.default.define('Book', {
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
//# sourceMappingURL=Books.js.map