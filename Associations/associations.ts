import Author from "../models/Authors";
import Book from "../models/Books";
import Loan from "../models/Loans";
import Member from "../models/Members";
import Reservation from "../models/Reservations";


const syncAssociations = async() =>{

    // Books and Authors
    Author.hasMany(Book,{foreignKey:'authorId'});
    Book.belongsTo(Author,{foreignKey:'authorId'});

    // Books and Loans
    Book.hasMany(Loan,{foreignKey:'book_id'});
    Loan.belongsTo(Book,{foreignKey:'book_id'});

    // Loans and Members
    Member.hasMany(Loan,{foreignKey:'member_id'})
    Loan.belongsTo(Member,{foreignKey:'member_id'}) 

    // Reservation and Members
    Member.hasMany(Reservation,{foreignKey:'member_id'});
    Reservation.belongsTo(Member,{foreignKey:'member_id'});

    // Books and Reservation
    Book.hasMany(Reservation,{foreignKey:'book_id'});
    Reservation.belongsTo(Book,{foreignKey:'book_id'});
    
}

export {syncAssociations}