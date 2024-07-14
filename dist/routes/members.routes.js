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
const membersRouter = express_1.default.Router();
const Members_1 = __importDefault(require("../models/Members"));
// Get all members
membersRouter.get('/allMembers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield Members_1.default.findAll();
        if (members.length === 0)
            return res.status(404).json({ message: "No members Found" });
        res.json({ Members: members });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one member
membersRouter.get('/member/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Members_1.default.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json(member);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new member
membersRouter.post('/memberCreation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield Members_1.default.create(req.body);
        res.json(member);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update a member
membersRouter.put('/member/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Members_1.default.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedMember = yield Members_1.default.findByPk(req.params.id);
            res.json(updatedMember);
        }
        else {
            res.status(404).json({ message: "Member Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete a member
membersRouter.delete('/member/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Members_1.default.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Member Deleted" });
        }
        else {
            res.status(404).json({ message: "Member Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = membersRouter;
//# sourceMappingURL=members.routes.js.map