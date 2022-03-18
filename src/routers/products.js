import { Router } from "express";
import productsApiArch from "../daos/products/productsDaoFile.js";
import productsApi from "../daos/products/productsDaoSql.js";
import 'dotenv/config';


const products = process.env.DB === "sql" ? productsApi : productsApiArch; 
const productsApiRouter = new Router();

let Admin = true;

console.log(products)

productsApiRouter.get('/', async (req, res) => {
    try {
        res.json(await products.listAll())
    } catch (error) {
        console.log(error)
        res.json({
            err: -1,
            message: error
        })
    }
})

productsApiRouter.get('/:id', async (req, res) => {
    try {
        res.json(await products.list(req.params.id))
    } catch (error) {
        res.json({
            err: -1,
            message: error
        })
    }
})

productsApiRouter.post('/', async (req, res) => {
    if(Admin){
        try {
            console.log(req.body)
            res.json(await products.save(req.body))
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
    if(Admin){
        try {
            res.json(await products.update({ ...req.body, id: req.params.id }))
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
    if(Admin){
        try {
            res.json(await products.delete(req.params.id))
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