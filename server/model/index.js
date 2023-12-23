import { Sequelize } from 'sequelize';
import { connection } from "../db/db.js"
import { tuboModel } from './tubo.model.js';

const db = {}

db.Sequelize = Sequelize;
db.connection = connection;

db.tubo = tuboModel(connection,Sequelize);

export default db;