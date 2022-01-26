
const express = require( "express" );
const { Router } = express

const app = express();
const router = Router()
const PORT = 8080;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use("/static", express.static("public"))

app.use("/api", router)

class Server {
    constructor(products) {
        this.products = products 
    }
    
    getAllProducts() {
        router.get("/products", (req, res) => {
            if(this.products){
                res.send({
                    status: "ok",
                    payload: this.products
                })
            } else {
                res.send({error: "no hay productos"})
            }
        })
    }

    getProductById() {
        router.get("/products/:id", (req, res) => {
            if(this.products){
                const id = parseInt(req.params.id) 
                const product = this.products.find((item) => item.id === id)
                if(product){
                    res.send({
                        status: "se encotro el producto",
                        payload: product
                    })
                } else {
                    res.send({error: "no se encontro el producto buscado"})
                }
            } else {
                res.send({error: "no hay productos"})
            }
        })
    }

    postProduct() {
        router.post("/products", (req, res) => {
            const id = this.products[this.products.length - 1].id + 1
            const title = req.body.title 
            const price = parseInt(req.body.price)
            const thumbnail = req.body.thumbnail
            if(title && price && thumbnail) {
                this.products = [...this.products, {id, title, price, thumbnail}]
                res.send({
                    status: "se agrego el producto",
                    payload: {id, title, price, thumbnail}
                })
            } else {
                res.send({error: "falta un parametro del producto"})
            }
        })
    }

    updateProduct() {
        router.put("/products/:id", (req, res) => {
            if(this.products){
                const id = parseInt(req.params.id) 
                const product = this.products.find((item) => item.id === id)
                const index = this.products.findIndex((item) => item.id === id)
                if(product){
                    const title = req.body.title 
                    const price = parseInt(req.body.price)
                    const thumbnail = req.body.thumbnail
                    if(title && price && thumbnail) {
                        this.products[index] = {id, title, price, thumbnail}
                        res.send({
                            status: "se actualizo el producto",
                            payload: {id, title, price, thumbnail}
                        })
                    } else {
                        res.send({error: "falta un parametro del producto"})
                    }
                } else {
                    res.send({error: "no se encontro el producto buscado"})
                }
            } else {
                res.send({error: "no hay productos"})
            }
        })
    }

    deleteProductById() {
        router.delete("/products/:id", (req, res) => {
            if(this.products) {
                const id = parseInt(req.params.id)
                const product = this.products.find((item) => item.id === id)
                const index = this.products.findIndex((item) => item.id === id)
                if(product){
                    this.products.splice(index, 1)
                    res.send({
                        status: "se elimino el producto",
                        payload: product
                    })
                } else {
                    res.send({error: "no se encontro el producto buscado"})
                }
            } else {
                res.send({error: "no hay productos"})
            }
        })
    }
}


const products = new Server([
        {id: 1, title: "coca", price: 120, thumbnail: "url del producto"},
        {id: 2, title: "sprite", price: 110, thumbnail: "url del producto"},
        {id: 3, title: "fanta", price: 100, thumbnail: "url del producto"},
    ])

products.getAllProducts()
products.getProductById()
products.postProduct()
products.updateProduct()
products.deleteProductById()

app.listen(PORT, () => {
    console.log(`Servirdor Http escuchando en el puerto ${PORT}`)
});

