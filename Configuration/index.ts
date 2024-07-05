import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sequel', 'sreeja16', 'sreeja', {
    dialect: 'postgres'
});

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

export default sequelize;
