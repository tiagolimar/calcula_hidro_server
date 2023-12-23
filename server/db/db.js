import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";

export const connection = new Sequelize(DB_CONFIG.db,DB_CONFIG.user,DB_CONFIG.password,{
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

try{
    await connection.authenticate();
    console.log('A conexão com o banco de dados foi estabelecida com sucesso.');
}catch(error){
    console.error('Não foi possível estabelecer a conexão com o banco de dados: ', error)
}
