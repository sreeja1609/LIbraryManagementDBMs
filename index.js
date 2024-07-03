import Sequelize from 'sequelize';

const sequelize = new Sequelize('sequel', 'sreeja16', 'sreeja', {
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error connecting to database");
})

sequelize.sync().then(() => {
    console.log("Tables and models synced successfully");
}).catch((err) => {
    console.log("Error syncing the tables");
});
export default sequelize; 