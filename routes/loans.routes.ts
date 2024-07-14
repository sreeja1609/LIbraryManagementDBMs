import express from 'express';
const loansRouter = express.Router();
import Loan from '../models/Loans';

// Get all loans
loansRouter.get('/allLoans', async (req, res) => {
    try {
        const loans = await Loan.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No loans Found" });
        res.json({Loans: loans});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get one loan
loansRouter.get('/loan/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(loan);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new loan
loansRouter.post('/loanCreation', async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.json(loan);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update a loan
loansRouter.put('/loan/:id', async (req, res) => {
    try {
        const [updated] = await Loan.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedLoan = await Loan.findByPk(req.params.id);
            res.json(updatedLoan);
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Delete a loan
loansRouter.delete('/loan/:id', async (req, res) => {
    try {
        const deleted = await Loan.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default loansRouter;
