import express from "express"
import { tuboController } from './../controller/tubo.controller.js';
import {app} from "../index.js"

export const routeTubo = ()=>{
    const router = express.Router();

    router.post('/tubo', tuboController.create)
    router.post('/tubos', tuboController.createAll)
    router.get('/tubos', tuboController.findAll)
    router.get('/tubo/id/:id', tuboController.findById)
    router.patch('/tubo/id/:id', tuboController.update)
    router.delete('/tubo/id/:id', tuboController.deleteById)
    router.delete('/tubos', tuboController.deleteALL)

    app.use('/api',router)
}