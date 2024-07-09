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
exports.deleteAuthorByCondition = exports.deleteAuthorById = exports.updateAuthorData = exports.getParticularAuthorData = exports.getAuthorsData = exports.createAuthor = void 0;
var Authors_1 = require("../models/Authors");
// Creating Authors
function createAuthor(author) {
    return __awaiter(this, void 0, void 0, function () {
        var Error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Authors_1.default.create(author)];
                case 1:
                    _a.sent();
                    console.log("Created Author successfully");
                    return [3 /*break*/, 3];
                case 2:
                    Error_1 = _a.sent();
                    console.log("Error while creating author", Error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createAuthor = createAuthor;
// Retrieving authors data from Authors table
function getAuthorsData() {
    return __awaiter(this, void 0, void 0, function () {
        var Auth, Error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Authors_1.default.findAll()];
                case 1:
                    Auth = _a.sent();
                    console.table(Auth.map(function (author) { return author.toJSON(); }));
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
exports.getAuthorsData = getAuthorsData;
// Retrieving specific author data from Authors table
function getParticularAuthorData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var author, Error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Authors_1.default.findOne({ where: { id: id } })];
                case 1:
                    author = _a.sent();
                    if (author) {
                        console.log('Author found:', author.toJSON());
                        return [2 /*return*/, author];
                    }
                    else {
                        console.log('Author not found');
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
exports.getParticularAuthorData = getParticularAuthorData;
// Updating Author data
function updateAuthorData(id, updatedata) {
    return __awaiter(this, void 0, void 0, function () {
        var Error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Authors_1.default.update(updatedata, {
                            where: { id: id }
                        })];
                case 1:
                    _a.sent();
                    console.log("Updated author data successfully");
                    return [3 /*break*/, 3];
                case 2:
                    Error_4 = _a.sent();
                    console.log("Error while updating author data", Error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateAuthorData = updateAuthorData;
// Deleting author by ID
function deleteAuthorById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var author, Error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, Authors_1.default.findByPk(id)];
                case 1:
                    author = _a.sent();
                    if (!author) return [3 /*break*/, 3];
                    return [4 /*yield*/, author.destroy()];
                case 2:
                    _a.sent();
                    console.log("Author deleted successfully");
                    return [3 /*break*/, 4];
                case 3:
                    console.log("Author not found");
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    Error_5 = _a.sent();
                    console.log("Error while deleting Author", Error_5);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.deleteAuthorById = deleteAuthorById;
// Deleting records from Authors table who meets particular condition
function deleteAuthorByCondition(condition) {
    return __awaiter(this, void 0, void 0, function () {
        var Error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Authors_1.default.destroy({
                            where: condition
                        })];
                case 1:
                    _a.sent();
                    console.log("Author deleted successfully");
                    return [3 /*break*/, 3];
                case 2:
                    Error_6 = _a.sent();
                    console.log("Error while deleting Author", Error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteAuthorByCondition = deleteAuthorByCondition;
