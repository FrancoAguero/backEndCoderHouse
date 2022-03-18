import express from "express";
import { MongoClient } from 'mongodb';
import mongoose from "mongoose";


import config from "./config.js";
import productosApiRouter from "./routers/products.js";

const app = express();

const uri = config.mongoRemote.cnxStr;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productosApiRouter);


const connectedServer = app.listen(config.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${connectedServer.address().port}`)
})

mongoose.connect(uri, config.mongoRemote.client)

connectedServer.on('error', error => console.log(`Error en el servidor ${error}`))