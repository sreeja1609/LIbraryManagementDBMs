import Author from "../models/Authors";
import Book from "../models/Books";
import Loan from "../models/Loans";
import Member from "../models/Members";
import Reservation from "../models/Reservations";

const authorsInfo = async () => {
    try {
        const author = await Author.bulkCreate([
            { name: 'Rabindranath Tagore', birth_year:1861, nationality:'Indian' },
            { name: 'Salman Rushdie', birth_year:1947,nationality:'Indian'},
            { name: 'R.K.Narayan', birth_year:1906,nationality:'Indian' },
            { name: 'Mulk Raj Anand',birth_year:1905, nationality:'Indian'},
        ]);
        console.log('Authors information inserted successfully');
        return author;
    } catch (err) {
        console.error("Error inserting authors information:", err);
        return null;
    }
};

const booksInfo = async () => {
    try {
        const book = await Book.bulkCreate([
            { title: 'Gitanjali', authorId: 1, genre: 'Poetry', isbn: '100',publication_year: 1910},
            { title: 'Quichotte', authorId: 2, genre: 'Satire', isbn:'101',publication_year: 2019},
            { title: 'Malgudi Days', authorId: 3, genre: 'Short Story', isbn: '102',publication_year: 1943},
            { title: 'The Home and the World', authorId: 1, genre: 'Novel', isbn: '103',publication_year: 1916},
            { title: 'Coolie', authorId: 4, genre: 'NNovel', isbn: '104',publication_year: 1936},
            { title: 'The Guide', authorId: 3, genre:'Comics', isbn: '105', publication_year: 1958},
            { title: 'Victory City', authorId: 2, genre: 'Novel', isbn: '106', publication_year: 2023}
        ]);
        console.log('Books information inserted successfully');
        return book;
    } catch (err) {
        console.error("Error inserting books information:", err);
        return null;
    }
};

const loansInfo = async () => {
    try {
        const loan = await Loan.bulkCreate([
            { book_id: 1, member_id:1, loan_date: '2024-06-10', due_date:'2024-07-03' },
            { book_id: 2, member_id:1, loan_date: '2024-05-10', due_date:'2024-07-09' },
            { book_id: 3, member_id:2, loan_date: '2024-08-20', due_date:'2024-10-10' },
            { book_id: 4, member_id:3, loan_date: '2024-09-16', due_date:'2024-12-10' },
            { book_id: 2, member_id:4, loan_date: '2024-12-23', due_date:'2025-01-10' }
        ]);
        console.log('Loans information inserted successfully');
        return loan;
    } catch (err) {
        console.error("Error inserting loans information:", err);
        return null;
    }
};

const membersInfo = async () => {
    try {
        const member = await Member.bulkCreate([
            { name: 'Keerthana', address: 'Karimnagar', phone_number:'8978363862',email:'keerthana@gmail.com' },
            { name: 'Anoosha', address:'Karimnagar', phone_number:'9440058809', email:'anoosha@gmail.com' },
            { name: 'Shailaja', address:'Sangareddy', phone_number:'9951534914', email:'shailaja@gmail.com' },
            { name: 'Usha', address:'Warangal', phone_number:'6303961097',email:'usha@gmail.com' },
            { name: 'Varun',address:'Warangal',phone_number:'6303522765',email:'varun@gmail.com' },
            { name: 'Vinay',address:'Hyderabad',phone_number:'9502147010',email:'vinay@gmail.com' }
        ]);
        console.log('Members information inserted successfully');
        return member;
    } catch (err) {
        console.error("Error inserting members information:", err);
        return null;
    }
};

const reservationInfo = async () => {
    try {
        const reserve = await Reservation.bulkCreate([
            { book_id: 1, member_id: 2, reservation_date: '2024-06-20' },
            { book_id: 2, member_id: 1, reservation_date: '2024-07-12' },
            { book_id: 3, member_id: 2, reservation_date: '2024-09-01' },
            { book_id: 4, member_id: 3, reservation_date: '2024-19-13' },
            { book_id: 3, member_id: 4, reservation_date: '2024-12-26' }
        ]);
        console.log('Reservations information inserted successfully');
        return reserve;
    } catch (err) {
        console.error("Error inserting reservations information:", err);
        return null;
    }
};

export{authorsInfo, booksInfo, loansInfo, membersInfo, reservationInfo};