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
const express_1 = __importDefault(require("express"));
const booksRouter = express_1.default.Router();
const Books_1 = __importDefault(require("../models/Books"));
// Get all books
booksRouter.get('/allBooks', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all books include books
        const books = yield Books_1.default.findAll();
        if (books.length === 0)
            return res.status(404).json({ message: "Books not found" });
        res.json({ Books: books });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one book
booksRouter.get('/book/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Books_1.default.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "Book Not Found" });
        }
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new book
booksRouter.post('/bookCreation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield Books_1.default.create(req.body);
        res.json(book);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update a book
booksRouter.put('/book/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Books_1.default.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedBook = yield Books_1.default.findByPk(req.params.id);
            res.json(updatedBook);
        }
        else {
            res.status(404).json({ message: "Book Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete a book
booksRouter.delete('/book/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Books_1.default.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Book Deleted" });
        }
        else {
            res.status(404).json({ message: "Book Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = booksRouter;
//# sourceMappingURL=books.routes.js.map