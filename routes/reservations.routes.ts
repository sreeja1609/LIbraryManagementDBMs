import express from 'express';
const reservationsRouter = express.Router();
import Reservation from '../models/Reservations';

// Get all reservations
reservationsRouter.get('/allReservations', async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        if (reservations.length === 0) return res.status(404).json({ message: "No Reservations Found" });
        res.json({Reservations: reservations});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get one reservation
reservationsRouter.get('/reservation/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "Reservation Not Found" });
        }
        res.json(reservation);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new reservation
reservationsRouter.post('/reservationCreation', async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.json(reservation);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update a reservation
reservationsRouter.put('/reservation/:id', async (req, res) => {
    try {
        const [updated] = await Reservation.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedReservation = await Reservation.findByPk(req.params.id);
            res.json(updatedReservation);
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Delete a reservation
reservationsRouter.delete('/reservation/:id', async (req, res) => {
    try {
        const deleted = await Reservation.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Reservation Deleted" });
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default reservationsRouter;
