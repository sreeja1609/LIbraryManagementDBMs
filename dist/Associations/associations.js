"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Authors_1 = __importDefault(require("../models/Authors"));
const Books_1 = __importDefault(require("../models/Books"));
const Loans_1 = __importDefault(require("../models/Loans"));
const Members_1 = __importDefault(require("../models/Members"));
const Reservations_1 = __importDefault(require("../models/Reservations"));
const syncAssociations = () => __awaiter(void 0, void 0, void 0, function* () {
    // Books and Authors
    Authors_1.default.hasMany(Books_1.default, { foreignKey: 'authorId' });
    Books_1.default.belongsTo(Authors_1.default, { foreignKey: 'authorId' });
    // Books and Loans
    Books_1.default.hasMany(Loans_1.default, { foreignKey: 'book_id' });
    Loans_1.default.belongsTo(Books_1.default, { foreignKey: 'book_id' });
    // Loans and Members
    Members_1.default.hasMany(Loans_1.default, { foreignKey: 'member_id' });
    Loans_1.default.belongsTo(Members_1.default, { foreignKey: 'member_id' });
    // Reservation and Members
    Members_1.default.hasMany(Reservations_1.default, { foreignKey: 'member_id' });
    Reservations_1.default.belongsTo(Members_1.default, { foreignKey: 'member_id' });
    // Books and Reservation
    Books_1.default.hasMany(Reservations_1.default, { foreignKey: 'book_id' });
    Reservations_1.default.belongsTo(Books_1.default, { foreignKey: 'book_id' });
});
exports.default = syncAssociations;
//# sourceMappingURL=associations.js.map