import cors from 'cors';
import express from 'express';
import db from './model/index.js';
import { routeTubo } from './routes/tubo.routes.js';

export const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}))

db.connection.sync()
.then(()=>{
    console.log("Sincronizando com o banco de dados...");
})
.catch(err=>{
    console.log("Falha na sincronização com o banco de dados.", err.message);
})


app.get('/',(_,response)=>{
    response.status(200).json({statusServer:"Online"})
})

routeTubo(app)

const host = process.env.PGHOST || 'localhost';
const port = 5000;


app.listen(port,()=>{
    console.log(`Server funcionando no endereço https://${host}:${port}`)
})
