import syncAssociations from "../Associations/associations";
import sequelize from "../Configuration/index";
import Book from "../models/Books";
import Loan from "../models/Loans";
import Sequelize from 'sequelize';

syncAssociations();

export namespace LibraryQueries {

    // Most popular books
    export async function getMostPopularBooks() {
        try {
            const result = await Book.findAll({
                attributes: [
                    'id',
                    'title',
                    [sequelize.fn('COUNT', sequelize.col('loans.id')), 'Loans_Count']
                ],
                include: { model: Loan, as: 'loans', attributes: [] },
                group: ['Book.id'],
                order: [[Sequelize.literal('"Loans_Count"'), 'DESC']],
                limit: 5
            });

            const popularBooks = result.map(book => {
                const bookJSON = book.toJSON();
                return {
                    Book_ID: bookJSON.id,
                    Title: bookJSON.title,
                    Loans_Count: bookJSON.Loans_Count,
                };
            });

            console.log("Most popular books");
            console.table(popularBooks);
        } catch (error) {
            console.error('Error fetching most popular books:', error);
            throw error;
        }
    }
}
