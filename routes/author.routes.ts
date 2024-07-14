import express from 'express';
const authorsRouter = express.Router();
import Author from '../models/Authors';

// Get all authors
authorsRouter.get('/allAuthors', async (req, res) => {
    try {
        const authors = await Author.findAll();
        if (authors.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.json({Authors: authors});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get one author
authorsRouter.get('/author/:id', async (req, res) => {
    try {
        const author = await Author.findByPk(req.params.id);
        if (author === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(author);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new author
authorsRouter.post('/authorCreation/', async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.json(author);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update an author
authorsRouter.put('/author/:id', async (req, res) => {
    try {
        const [updated] = await Author.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Author.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Delete an author
authorsRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Author.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Author Deleted" });
        } else {
            res.status(404).json({ message: "Author Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default authorsRouter;
