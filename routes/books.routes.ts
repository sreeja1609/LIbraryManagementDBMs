import express from 'express';
const booksRouter = express.Router();
import Book from '../models/Books';

// Get all books
booksRouter.get('/allBooks', async (req, res) => {
    try {
        // Fetch all books include books
        const books = await Book.findAll();
        if (books.length === 0) return res.status(404).json({ message: "Books not found" });
        res.json({Books: books});
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Get one book
booksRouter.get('/book/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "Book Not Found" });
        }
        res.json(book);
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

// Create a new book
booksRouter.post('/bookCreation', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Update a book
booksRouter.put('/book/:id', async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedBook = await Book.findByPk(req.params.id);
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err: any) {
        res.status(400).json({message: err.message});
    }
});

// Delete a book
booksRouter.delete('/book/:id', async (req, res) => {
    try {
        const deleted = await Book.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err: any) {
        res.status(500).json({message: err.message});
    }
});

export default booksRouter;
