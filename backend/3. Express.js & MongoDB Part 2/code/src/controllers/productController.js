const ProductModel = require('../models/productModel')

const getProductPage = async (req, res) => {
    try {
        // get all the products from the db
        const products = await ProductModel.find();
        // parse the object as param to the ejs file with the name product and send it fully rendred for the client 
        res.render('product', { products: products })
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.redirect('/product')
    }
}

const getEditPage = async (req, res) => {
    try {
        // get the id from the req (since it's a param, we could access is using req.params)
        const {id}  = req.params
        const product = await ProductModel.findById({ _id:id })
        // parse the object data[id] as param to the ejs file with the name editProduct and send it fully rendred for the client
        res.render('editProduct', { product: product })
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.redirect('/product')
    }
}
const createHandler = async (req, res) => {
    try {
        // get the data sent by the user in the req.body
        const { name, description, price } = req.body
        // add the product sent by the user to our data variable
        const product = await ProductModel.create({
            name,
            description,
            price:Number(price)
        })
        // redirect the client to the /product route
        res.redirect('/product')
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.redirect('/product')
    }

}
const editHandler = async (req, res) => {
    try {
        // get the id from the req 
        const { id } = req.params
        // get the data sent by the user in the req.body
        const { name, description, price } = req.body
        // update the data[id] element with the new data
        const updatedProduct = await ProductModel.findOneAndUpdate({ _id:id }, { name, description, price:Number(price) })
        // redirect the client to the /product route
        res.redirect('/product')
    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.redirect('/product')
    }
}
const deletehandler = async (req, res) => {
    try {
        
        // get the id from the req (since it's a param, we could access is using req.params)
        const { id } = req.params
        // delete the element with id index in the array 
        const deletedProduct = await ProductModel.deleteOne({ _id:id })
        // redirect the client to the /product route
        res.redirect('/product')
    } catch (error) {
        console.log(`Error: ${error.message}`);

        res.redirect('/product')
    }
}

module.exports = { getProductPage, getEditPage, createHandler, editHandler, deletehandler }