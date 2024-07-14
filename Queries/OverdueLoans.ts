import syncAssociations from "../Associations/associations";
import sequelize from "../Configuration/index";
import Sequelize from 'sequelize';
import Loan from "../models/Loans";
import Member from "../models/Members";
import Book from "../models/Books";

syncAssociations();

export namespace LibraryQueries {

    // Overdue loans
    export async function getOverdueLoans() {
        try {
            const today = new Date();
            const result = await Loan.findAll({
                where: {
                    due_date: {
                        [Sequelize.Op.lt]: today
                    }
                },
                include: [
                    { model: Member, as: 'member', attributes: ['name', 'email'] },
                    { model: Book, as: 'book', attributes: ['title'] }
                ]
            });

            const overdueLoans = result.map(loan => {
                const loanJSON = loan.toJSON();
                return {
                    Loan_ID: loanJSON.id,
                    Book_Title: loanJSON.book.title,
                    Member_Name: loanJSON.member.name,
                    Member_Email: loanJSON.member.email,
                    Loan_Date: loanJSON.loan_date,
                    Due_Date: loanJSON.due_date
                };
            });

            console.log("Overdue loans");
            console.table(overdueLoans);
        } catch (error) {
            console.error('Error fetching overdue loans:', error);
            throw error;
        }
    }
}
