import Book from "../models/Books"

// Creating Books
export async function createBook(book: any): Promise<void> {
    try {
        await Book.create(book);
        console.log("Created book successfully");
    }
    catch(Error) {
        console.log("Error while creating book", Error);
    }
}
  
// Retrieving books data from Books table
export async function getBooksData(): Promise<void> {
    try {
        const allBooks = await Book.findAll(); 
        console.table(allBooks.map(book => book.toJSON()));
        console.log("Retrieved data successfully");  
    }
    catch(Error) {
        console.log("Error while reading data",Error);
    }
}
  
// Retrieving specific book data from Books table
export async function getParticularBookData(id: any) {
    try {
        const book = await Book.findOne({ where: { id: id } });
        if (book) {
            console.log('Book found:', book.toJSON());
            return book;
        }
        else {
            console.log('Book not found');
            return null;
        }
    }
    catch(Error) {
        console.log("Error while reading data",Error);
    }
}
  
// Updating Book data
export async function updateBookData(id: any, updatedata: any) 
{
    try {
        await Book.update(updatedata, {
            where: { id: id }
        });
        console.log("Updated book data successfully");
    }
    catch(Error) {
        console.log("Error while updating author data", Error);
    }
}
  
// Deleting book by ID
export async function deleteBookById(id: number): Promise<void> {
    try {
        const book = await Book.findByPk(id);
        if (book) {
            await book.destroy();
            console.log("Book deleted successfully");
        }
        else {
            console.log("Book not found");
        }
    }
    catch(Error) {
        console.log("Error while deleting Book",Error);
    }
}
  
// Deleting records from Books table which meets particular condition
export async function deleteBookByCondition(condition: any) {
    try {
        await Book.destroy({
            where: condition
        });
        console.log("Book deleted successfully");   
    }
    catch(Error) {
        console.log("Error while deleting Book",Error);
    }
}  
  