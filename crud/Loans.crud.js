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
exports.deleteLoanByCondition = exports.deleteLoanById = exports.updateLoanData = exports.getParticularLoanData = exports.getLoansData = exports.createLoan = void 0;
var Loans_1 = require("../models/Loans");
// Creating Loans
function createLoan(loan) {
    return __awaiter(this, void 0, void 0, function () {
        var Error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Loans_1.default.create(loan)];
                case 1:
                    _a.sent();
                    console.log("Created Loan successfully");
                    return [3 /*break*/, 3];
                case 2:
                    Error_1 = _a.sent();
                    console.log("Error while creating loan", Error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createLoan = createLoan;
// Retrieving loans data from Loans table
function getLoansData() {
    return __awaiter(this, void 0, void 0, function () {
        var allLoans, Error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Loans_1.default.findAll()];
                case 1:
                    allLoans = _a.sent();
                    console.table(allLoans.map(function (loan) { return loan.toJSON(); }));
                    console.log("Retrieved data successfully");
                    return [3 /*break*/, 3];
                case 2:
                    Error_2 = _a.sent();
                    console.log("Error while reading data", Error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getLoansData = getLoansData;
// Retrieving specific loan data from Loans table
function getParticularLoanData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var loan, Error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Loans_1.default.findOne({ where: { id: id } })];
                case 1:
                    loan = _a.sent();
                    if (loan) {
                        console.log('Loan found:', loan.toJSON());
                        return [2 /*return*/, loan];
                    }
                    else {
                        console.log('Loan not found');
                        return [2 /*return*/, null];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    Error_3 = _a.sent();
                    console.log("Error while reading data", Error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getParticularLoanData = getParticularLoanData;
// Updating Loan data
function updateLoanData(id, updatedata) {
    return __awaiter(this, void 0, void 0, function () {
        var Error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Loans_1.default.update(updatedata, {
                            where: { id: id }
                        })];
                case 1:
                    _a.sent();
                    console.log("Updated loan data successfully");
                    return [3 /*break*/, 3];
                case 2:
                    Error_4 = _a.sent();
                    console.log("Error while updating loan data", Error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateLoanData = updateLoanData;
// Deleting loan by ID
function deleteLoanById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var loan, Error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, Loans_1.default.findByPk(id)];
                case 1:
                    loan = _a.sent();
                    if (!loan) return [3 /*break*/, 3];
                    return [4 /*yield*/, loan.destroy()];
                case 2:
                    _a.sent();
                    console.log("Loan deleted successfully");
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Loan not found");
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    Error_5 = _a.sent();
                    console.log("Error while deleting Loan", Error_5);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.deleteLoanById = deleteLoanById;
// Deleting records from Loans table which meets particular condition
function deleteLoanByCondition(condition) {
    return __awaiter(this, void 0, void 0, function () {
        var Error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Loans_1.default.destroy({
                            where: condition
                        })];
                case 1:
                    _a.sent();
                    console.log("Loan deleted successfully");
                    return [3 /*break*/, 3];
                case 2:
                    Error_6 = _a.sent();
                    console.log("Error while deleting Loan", Error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteLoanByCondition = deleteLoanByCondition;
