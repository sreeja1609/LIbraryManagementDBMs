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
const reservationsRouter = express_1.default.Router();
const Reservations_1 = __importDefault(require("../models/Reservations"));
// Get all reservations
reservationsRouter.get('/allReservations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservations = yield Reservations_1.default.findAll();
        if (reservations.length === 0)
            return res.status(404).json({ message: "No Reservations Found" });
        res.json({ Reservations: reservations });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one reservation
reservationsRouter.get('/reservation/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservation = yield Reservations_1.default.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "Reservation Not Found" });
        }
        res.json(reservation);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new reservation
reservationsRouter.post('/reservationCreation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservation = yield Reservations_1.default.create(req.body);
        res.json(reservation);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update a reservation
reservationsRouter.put('/reservation/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield Reservations_1.default.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedReservation = yield Reservations_1.default.findByPk(req.params.id);
            res.json(updatedReservation);
        }
        else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete a reservation
reservationsRouter.delete('/reservation/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield Reservations_1.default.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Reservation Deleted" });
        }
        else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = reservationsRouter;
//# sourceMappingURL=reservations.routes.js.map