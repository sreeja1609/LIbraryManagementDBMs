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
const loansRouter = express_1.default.Router();
const Loans_1 = __importDefault(require("../models/Loans"));
// Get all loans
loansRouter.get('/allLoans', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loans = yield Loans_1.default.findAll();
        if (loans.length === 0)
            return res.status(404).json({ message: "No loans Found" });
        res.json({ Loans: loans });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one loan
loansRouter.get('/loan/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = yield Loans_1.default.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(loan);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new loan
loansRouter.post('/loanCreation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = yield Loans_1.default.create(req.body);
        res.json(loan);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update a loan
loansRouter.put('/loan/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Loans_1.default.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedLoan = yield Loans_1.default.findByPk(req.params.id);
            res.json(updatedLoan);
        }
        else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete a loan
loansRouter.delete('/loan/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Loans_1.default.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        }
        else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = loansRouter;
//# sourceMappingURL=loans.routes.js.map