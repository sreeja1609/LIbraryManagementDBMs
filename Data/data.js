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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationInfo = exports.membersInfo = exports.loansInfo = exports.booksInfo = exports.authorsInfo = void 0;
var Authors_1 = require("../models/Authors");
var Books_1 = require("../models/Books");
var Loans_1 = require("../models/Loans");
var Members_1 = require("../models/Members");
var Reservations_1 = require("../models/Reservations");
var authorsInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var author, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Authors_1.default.bulkCreate([
                        { name: 'Rabindranath Tagore', birth_year: 1861, nationality: 'Indian' },
                        { name: 'Salman Rushdie', birth_year: 1947, nationality: 'Indian' },
                        { name: 'R.K.Narayan', birth_year: 1906, nationality: 'Indian' },
                        { name: 'Mulk Raj Anand', birth_year: 1905, nationality: 'Indian' },
                    ])];
            case 1:
                author = _a.sent();
                console.log('Authors information inserted successfully');
                return [2 /*return*/, author];
            case 2:
                err_1 = _a.sent();
                console.error("Error inserting authors information:", err_1);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.authorsInfo = authorsInfo;
var booksInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var book, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Books_1.default.bulkCreate([
                        { title: 'Gitanjali', authorId: 1, genre: 'Poetry', isbn: '100', publication_year: 1910 },
                        { title: 'Quichotte', authorId: 2, genre: 'Satire', isbn: '101', publication_year: 2019 },
                        { title: 'Malgudi Days', authorId: 3, genre: 'Short Story', isbn: '102', publication_year: 1943 },
                        { title: 'The Home and the World', authorId: 1, genre: 'Novel', isbn: '103', publication_year: 1916 },
                        { title: 'Coolie', authorId: 4, genre: 'NNovel', isbn: '104', publication_year: 1936 },
                        { title: 'The Guide', authorId: 3, genre: 'Comics', isbn: '105', publication_year: 1958 },
                        { title: 'Victory City', authorId: 2, genre: 'Novel', isbn: '106', publication_year: 2023 }
                    ])];
            case 1:
                book = _a.sent();
                console.log('Books information inserted successfully');
                return [2 /*return*/, book];
            case 2:
                err_2 = _a.sent();
                console.error("Error inserting books information:", err_2);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.booksInfo = booksInfo;
var loansInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var loan, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Loans_1.default.bulkCreate([
                        { book_id: 1, member_id: 1, loan_date: '2024-06-10', due_date: '2024-07-03' },
                        { book_id: 2, member_id: 1, loan_date: '2024-05-10', due_date: '2024-07-09' },
                        { book_id: 3, member_id: 2, loan_date: '2024-08-20', due_date: '2024-10-10' },
                        { book_id: 4, member_id: 3, loan_date: '2024-09-16', due_date: '2024-12-10' },
                        { book_id: 2, member_id: 4, loan_date: '2024-12-23', due_date: '2025-01-10' }
                    ])];
            case 1:
                loan = _a.sent();
                console.log('Loans information inserted successfully');
                return [2 /*return*/, loan];
            case 2:
                err_3 = _a.sent();
                console.error("Error inserting loans information:", err_3);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.loansInfo = loansInfo;
var membersInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var member, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Members_1.default.bulkCreate([
                        { name: 'Keerthana', address: 'Karimnagar', phone_number: '8978363862', email: 'keerthana@gmail.com' },
                        { name: 'Anoosha', address: 'Karimnagar', phone_number: '9440058809', email: 'anoosha@gmail.com' },
                        { name: 'Shailaja', address: 'Sangareddy', phone_number: '9951534914', email: 'shailaja@gmail.com' },
                        { name: 'Usha', address: 'Warangal', phone_number: '6303961097', email: 'usha@gmail.com' },
                        { name: 'Varun', address: 'Warangal', phone_number: '6303522765', email: 'varun@gmail.com' },
                        { name: 'Vinay', address: 'Hyderabad', phone_number: '9502147010', email: 'vinay@gmail.com' }
                    ])];
            case 1:
                member = _a.sent();
                console.log('Members information inserted successfully');
                return [2 /*return*/, member];
            case 2:
                err_4 = _a.sent();
                console.error("Error inserting members information:", err_4);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.membersInfo = membersInfo;
var reservationInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var reserve, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Reservations_1.default.bulkCreate([
                        { book_id: 1, member_id: 2, reservation_date: '2024-06-20' },
                        { book_id: 2, member_id: 1, reservation_date: '2024-07-12' },
                        { book_id: 3, member_id: 2, reservation_date: '2024-09-01' },
                        { book_id: 4, member_id: 3, reservation_date: '2024-19-13' },
                        { book_id: 3, member_id: 4, reservation_date: '2024-12-26' }
                    ])];
            case 1:
                reserve = _a.sent();
                console.log('Reservations information inserted successfully');
                return [2 /*return*/, reserve];
            case 2:
                err_5 = _a.sent();
                console.error("Error inserting reservations information:", err_5);
                return [2 /*return*/, null];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.reservationInfo = reservationInfo;
