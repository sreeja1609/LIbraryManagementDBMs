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
const sequelize_1 = require("sequelize");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const associations_1 = __importDefault(require("../Associations/associations"));
const author_routes_1 = __importDefault(require("../routes/author.routes"));
const books_routes_1 = __importDefault(require("../routes/books.routes"));
const loans_routes_1 = __importDefault(require("../routes/loans.routes"));
const members_routes_1 = __importDefault(require("../routes/members.routes"));
const reservations_routes_1 = __importDefault(require("../routes/reservations.routes"));
const app = (0, express_1.default)();
const sequelize = new sequelize_1.Sequelize('sequel', 'sreeja16', 'sreeja', {
    dialect: 'postgres'
});
app.use(body_parser_1.default.json());
(0, associations_1.default)();
app.use('/api/authors', author_routes_1.default);
app.use('/api/books', books_routes_1.default);
app.use('/api/members', members_routes_1.default);
app.use('/api/loans', loans_routes_1.default);
app.use('/api/reservations', reservations_routes_1.default);
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Connection successful");
    }
    catch (err) {
        console.error("Error connecting to database", err);
    }
});
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.sync({ force: true });
        console.log("Tables and models synced successfully");
    }
    catch (err) {
        console.error("Error syncing the tables", err);
    }
});
const initializeDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectToDatabase();
    yield syncDatabase();
});
initializeDatabase().catch((err) => {
    console.error("Error initializing the database", err);
});
app.listen(3000, () => console.log('Server is runnin in the port 3000'));
exports.default = sequelize;
//# sourceMappingURL=index.js.map