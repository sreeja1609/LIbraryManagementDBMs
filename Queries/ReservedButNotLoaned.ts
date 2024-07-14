import syncAssociations from "../Associations/associations";
import Book from "../models/Books";
import Reservation from "../models/Reservations";
import Loan from "../models/Loans";

syncAssociations();

export namespace LibraryQueries {

    // Books reserved but not loaned
    export async function getReservedBooksNotLoaned() {
        try {
            const result = await Book.findAll({
                include: [
                    {
                        model: Reservation,
                        as: 'reservations',
                        required: true,
                        include: [
                            {
                                model: Loan,
                                as: 'loan',
                                required: false,
                                where: { id: null }
                            }
                        ]
                    }
                ]
            });

            const reservedBooks = result.map(book => {
                const bookJSON = book.toJSON();
                return {
                    Book_ID: bookJSON.id,
                    Title: bookJSON.title,
                    Author_ID: bookJSON.authorId,
                    ISBN: bookJSON.isbn,
                    Reservations: bookJSON.reservations.map((reservation: any) => ({
                        Member_ID: reservation.member_id,
                        Reservation_Date: reservation.reservation_date
                    }))
                };
            });

            console.log("Books reserved but not loaned");
            console.table(reservedBooks);
        } catch (error) {
            console.error('Error fetching reserved books which are not loaned:', error);
            throw error;
        }
    }
}
