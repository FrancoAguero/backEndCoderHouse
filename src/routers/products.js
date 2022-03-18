import { Router } from "express";
import productosApiArch from "../daos/products/productosDaoArchivo.js";
import productosApi from "../daos/products/productosDaoSQL.js";


const products = process.env.DB === "sql" ? productosApi : productosApiArch; 
const productsApiRouter = new Router();

let Administrador = true;

productsApiRouter.get('/', async (req, res) => {
    try {
        res.json(await products.listarAll())
    } catch (error) {
        res.json({
            err: -1,
            message: error
        })
    }
})

productsApiRouter.get('/:id', async (req, res) => {
    try {
        res.json(await products.listar(req.params.id))
    } catch (error) {
        res.json({
            err: -1,
            message: error
        })
    }
})

productsApiRouter.post('/', async (req, res) => {
    if(Administrador){
        try {
            res.json(await products.guardar(req.body))
        } catch (error) {
            res.json({
                err: -1,
                message: error
            })
        }
    }
    else{
        res.json({
            err: -1,
            message: "ruta no autorizada"
        })
    }
})

productsApiRouter.put('/:id', async (req, res) => {
    if(Administrador){
        try {
            res.json(await products.actualizar({ ...req.body, id: req.params.id }))
        } catch (error) {
            res.json({
                err: -1,
                message: error
            })
        }
    }
    else{
        res.json({
            err: -1,
            message: "ruta no autorizada"
        })
    }
})

productsApiRouter.delete('/:id', async (req, res) => {
    if(Administrador){
        try {
            res.json(await products.borrar(req.params.id))
        } catch (error) {
            res.json({
                err: -1,
                message: error
            })
        }
    }
    else{
        res.json({
            err: -1,
            message: "ruta no autorizada"
        })
    }
})


export default productsApiRouter;