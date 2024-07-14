"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Sequelize from 'sequelize';
var sequel = require('sequelize');
const index_1 = __importDefault(require("../Configuration/index"));
const { DataTypes } = sequel;
const Member = index_1.default.define('Member', {
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
//# sourceMappingURL=Members.js.map