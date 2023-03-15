import Sequelize from 'sequelize';

 export const sequelize = new Sequelize('m7_sequelize_basico', 'node', '123456', {
    host:'localhost',
    dialect: 'postgres'
})
