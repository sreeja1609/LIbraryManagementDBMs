"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
const index_1 = __importDefault(require("../Configuration/index"));
const { DataTypes } = sequel;
const Author = index_1.default.define('Author', {
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
//# sourceMappingURL=Authors.js.map