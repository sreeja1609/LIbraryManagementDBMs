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
const authorsRouter = express_1.default.Router();
const Authors_1 = __importDefault(require("../models/Authors"));
// Get all authors
authorsRouter.get('/allAuthors', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield Authors_1.default.findAll();
        if (authors.length === 0)
            return res.status(404).json({ message: "No Authors Found" });
        res.json({ Authors: authors });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one author
authorsRouter.get('/author/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield Authors_1.default.findByPk(req.params.id);
        if (author === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(author);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new author
authorsRouter.post('/authorCreation/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield Authors_1.default.create(req.body);
        res.json(author);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update an author
authorsRouter.put('/author/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Authors_1.default.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAuthor = yield Authors_1.default.findByPk(req.params.id);
            res.json(updatedAuthor);
        }
        else {
            res.status(404).json({ message: "Author Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete an author
authorsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Authors_1.default.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Author Deleted" });
        }
        else {
            res.status(404).json({ message: "Author Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = authorsRouter;
//# sourceMappingURL=author.routes.js.map