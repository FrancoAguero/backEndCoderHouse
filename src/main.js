import express from "express";
import { MongoClient } from 'mongodb';

import config from "./config.js";
import productosApiRouter from "./routers/products";

const app = express();

const uri = config.mongoRemote.cnxStr;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productosApiRouter);


const connectedServer = app.listen(config.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${connectedServer.address().port}`)
})

const client = new MongoClient(uri, config.mongoRemote.client);
client.connect(err => {
    const collection = client.db("test").collection("devices");
    client.close();
});

connectedServer.on('error', error => console.log(`Error en el servidor ${error}`))