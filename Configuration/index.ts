import { Sequelize } from 'sequelize';
import express from 'express';
import bodyParser from 'body-parser';
import syncAssociations from '../Associations/associations';
import authorsRouter from '../routes/author.routes';
import booksRouter from '../routes/books.routes';
import loansRouter from '../routes/loans.routes';
import membersRouter from '../routes/members.routes';
import reservationsRouter from '../routes/reservations.routes';
import { loanBookToMember, reserveBookForMember, returnBook, cancelReservation } from '../Transactions/transactions';

const app = express();

const sequelize = new Sequelize('sequel', 'sreeja16', 'sreeja', {
    dialect: 'postgres'
});

app.use(bodyParser.json());

syncAssociations();

app.use('/api/authors', authorsRouter);
app.use('/api/books', booksRouter);
app.use('/api/members', membersRouter);
app.use('/api/loans', loansRouter);
app.use('/api/reservations', reservationsRouter);

const connectToDatabase = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log("Connection successful");
    } catch (err) {
        console.error("Error connecting to database", err);
    }
};

const syncDatabase = async (): Promise<void> => {
    try {
        await sequelize.sync({force: true});
        console.log("Tables and models synced successfully");
    } catch (err) {
        console.error("Error syncing the tables", err);
    }
};

const initializeDatabase = async (): Promise<void> => {
    await connectToDatabase();
    await syncDatabase();
};

initializeDatabase().catch((err) => {
    console.error("Error initializing the database", err);
});

app.listen(3000,()=>
    console.log('Server is runnin in the port 3000')
)
export default sequelize;
