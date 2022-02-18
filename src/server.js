
const express = require( "express" );
const { Router } = express

const app = express();
const router = Router()
const PORT = 8080;
const Admin = true

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use("/static", express.static("public"))

app.use("/api", router)

class Server {
    constructor(products, carts) {
        this.products = products 
        this.carts = carts
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
            const name = req.body.name 
            const price = parseInt(req.body.price)
            const timestamp = Date.now()
            const description = req.body.description
            const code = req.body.code
            const photo = req.body.photo
            const stock = req.body.stock

            if(name && price && description && code && photo && stock) {
                this.products = [...this.products, {id, name, price, timestamp, description, code, photo, stock}]
                res.send({
                    status: "se agrego el producto",
                    payload: {id, name, price, timestamp, description, code, photo, stock}
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
                    const name = req.body.name 
                    const price = parseInt(req.body.price)
                    const timestamp = Date.now()
                    const description = req.body.description
                    const code = req.body.code
                    const photo = req.body.photo
                    const stock = req.body.stock

                    if(name && price && description && code && photo && stock) {
                        this.products[index] = {id, name, price, timestamp, description, code, photo, stock}
                        res.send({
                            status: "se actualizo el producto",
                            payload: {id, name, price, timestamp, description, code, photo, stock}
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

    postCart() {
        router.post("/cart", (req, res) => {
            const id = this.carts[this.carts.length - 1].id + 1
            const timestamp = Date.now()
            const products = []
            this.carts = [...this.carts, {id, timestamp, products}]
            res.send({
                status: "se agrego un nuevo carrito",
                payload: {id, timestamp, products}
            })
        })
    }

    deleteCartById() {
        router.delete("/cart/:id", (req, res) => {
            if(this.carts) {
                const id = parseInt(req.params.id)
                const cart = this.carts.find((item) => item.id === id)
                const index = this.carts.findIndex((item) => item.id === id)
                if(cart){
                    this.carts.splice(index, 1)
                    res.send({
                        status: "se elimino el carrito",
                        payload: cart
                    })
                } else {
                    res.send({error: "no se encontro el carrito buscado"})
                }
            } else {
                res.send({error: "no hay carritos"})
            }
        })
    }

    getAllProductsInsideTheCart() {
        router.get("/cart/:id/products", (req, res) => {
            if(this.carts){
                const id = parseInt(req.params.id) 
                const cart = this.carts.find((item) => item.id === id)

                if(cart){
                    res.send({
                        status: `se encotro los productos del carrito ${id}`,
                        payload: cart.products
                    })
                } else {
                    res.send({error: "no se encontro el carrito buscado"})
                }
            } else {
                res.send({error: "no hay carritos"})
            }
        })
    }

    postProductsInsideTheCart() {
        router.post("/cart/:id/products/:idProd", (req, res) => {
            if(this.carts){
                const id = parseInt(req.params.id) 
                const idProd = parseInt(req.params.idProd) 
                const cart = this.carts.find((item) => item.id === id)
                const index = this.carts.findIndex((item) => item.id === id)
                const product = this.products.find((item) => item.id === idProd)

                if(cart){
                    if(product){
                        this.carts[index].products = [...this.carts[index].products, product]
                        res.send({
                            status: `se agrego el producto al carrito ${id}`,
                            payload: cart.products
                        })
                    } else {
                        res.send({error: "no se encontro el producto que quieres agregar"})
                    }
                } else {
                    res.send({error: "no se encontro el carrito buscado"})
                }
            } else {
                res.send({error: "no hay carritos"})
            }
        })
    }

    deleteProductsInsideTheCart() {
        router.delete("/cart/:id/products/:idProd", (req, res) => {
            if(this.carts){
                const id = parseInt(req.params.id) 
                const idProd = parseInt(req.params.idProd) 
                const cart = this.carts.find((item) => item.id === id)
                const index = this.carts.findIndex((item) => item.id === id)
                const product = this.carts[index].products.find((item) => item.id === idProd)
                const indexProduct = this.carts[index].products.findIndex((item) => item.id === idProd)

                if(cart){
                    if(product){
                        this.carts[index].products.splice(indexProduct, 1)
                        res.send({
                            status: `se elimino el producto del carrito ${id}`,
                            payload: cart.products
                        })
                    } else {
                        res.send({error: "no se encontro el producto que quieres eliminar"})
                    }
                } else {
                    res.send({error: "no se encontro el carrito buscado"})
                }
            } else {
                res.send({error: "no hay carritos"})
            }
        })
    }
}


const products = new Server([
        {id: 1, name: "Coca-Cola", price: 200, timestamp: Date.now(), description: "soda", code: 000, photo: "url", stock: 20},
    ], [
        {id: 1, timestamp: Date.now(), products: []}
    ])

products.getAllProducts()
products.getProductById()
products.postProduct()
products.updateProduct()
products.deleteProductById()
products.postCart()
products.deleteCartById()
products.getAllProductsInsideTheCart()
products.postProductsInsideTheCart()
products.deleteProductsInsideTheCart()

app.listen(PORT, () => {
    console.log(`Servirdor Http escuchando en el puerto ${PORT}`)
});

