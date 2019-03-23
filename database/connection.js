import Sequelize from 'sequelize';
const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/homework');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export default sequelize;