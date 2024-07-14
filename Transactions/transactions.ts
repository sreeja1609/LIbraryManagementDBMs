import sequelize from '../Configuration/index';
import Loan from '../models/Loans';
import Reservation from '../models/Reservations';
import Book from '../models/Books';

export async function loanBookToMember(bookId: number, memberId: number) {
    try {
        await sequelize.transaction(async (t) => {

            // Check if the book is reserved by the member
            const reservation = await Reservation.findOne({
                where: {
                    book_id: bookId,
                    member_id: memberId
                },
                transaction: t
            });

            if (reservation) {

                // Create a loan record
                const today = new Date();
                const dueDate = new Date();
                dueDate.setDate(today.getDate() + 14); // 2 weeks loan period

                await Loan.create({
                    book_id: bookId,
                    member_id: memberId,
                    loan_date: today,
                    due_date: dueDate
                }, { transaction: t });

                // Remove the reservation
                await reservation.destroy({ transaction: t });

                console.log("Loan created and reservation removed.");
            } else {
                throw new Error("Reservation not found.");
            }
        });
    } catch (error) {
        console.error("Failed to loan book to member:", error);
    }
}

export async function reserveBookForMember(bookId: number, memberId: number) {
    try {
        await sequelize.transaction(async (t) => {
            // Check if the book is already reserved
            const existingReservation = await Reservation.findOne({
                where: {
                    book_id: bookId,
                    member_id: memberId
                },
                transaction: t
            });

            if (!existingReservation) {
                // Create a new reservation
                await Reservation.create({
                    book_id: bookId,
                    member_id: memberId,
                    reservation_date: new Date()
                }, { transaction: t });

                console.log("Book reserved for member.");
            } else {
                throw new Error("Book is already reserved by this member.");
            }
        });
    } catch (error) {
        console.error("Failed to reserve book for member:", error);
    }
}

export async function returnBook(loanId: number) {
    try {
        await sequelize.transaction(async (t: any) => {
            const loan = await Loan.findByPk(loanId, { transaction: t });
            if (loan) {
                await loan.destroy({ transaction: t });
                console.log("Book returned and loan record removed.");
            } else {
                throw new Error("Loan record not found.");
            }
        });
    } catch (error) {
        console.error("Failed to return book:", error);
    }
}

export async function cancelReservation(reservationId: number) {
    try {
        await sequelize.transaction(async (t: any) => {
            const reservation = await Reservation.findByPk(reservationId, { transaction: t });
            if (reservation) {
                await reservation.destroy({ transaction: t });
                console.log("Reservation cancelled.");
            } else {
                throw new Error("Reservation record not found.");
            }
        });
    } catch (error) {
        console.error("Failed to cancel reservation:", error);
    }
}
