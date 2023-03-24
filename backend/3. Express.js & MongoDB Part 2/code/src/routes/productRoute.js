const route= require('express').Router();
const {getProductPage,getEditPage,createHandler,editHandler,deletehandler}= require('../controllers/productController')

/*  Assign to each sub route a main function (endpoint handler) */

// get a list of products page
route.get('/', getProductPage)

// get the edit page for a signle product using the id as ref
// id is a param that should be sent with the request
route.get('/edit/:id',getEditPage)

// create a new product
route.post('/',createHandler)

// edit a product using id as ref
route.post('/edit/:id',editHandler)

// delete a product using the id as ref
route.post('/delete/:id',deletehandler)

module.exports= route