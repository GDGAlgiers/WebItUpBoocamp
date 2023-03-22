const data= [
    {
        id:0,
        name:"product0",
        description:"product 0",
        price:150
    },
    {
        id:1,
        name:"product1",
        description:"product 1",
        price:150
    },
    {
        id:2,
        name:"product2",
        description:"product 2",
        price:150
    },
]

const getProductPage=(req,res)=>{
    // parse the object as param to the ejs file with the name product and send it fully rendred for the client 
    res.render('product',{products:data})
}

const getEditPage=(req,res)=>{
    // get the id from the req (since it's a param, we could access is using req.params)
    const {id}= req.params
    // parse the object data[id] as param to the ejs file with the name editProduct and send it fully rendred for the client
    res.render('editProduct',{product:data[id]})
}
const createHandler=(req,res)=>{
    // get the data sent by the user in the req.body
    const {name,description,price}=req.body
    // add the product sent by the user to our data variable
    data.push({
        id:data.length,
        name,
        description,
        price
    })
    // redirect the client to the /product route
    res.redirect('/product')

}
const editHandler=(req,res)=>{
    // get the id from the req 
    const {id}= req.params
    // get the data sent by the user in the req.body
    const {name,description,price}=req.body
    // update the data[id] element with the new data
    data[id]={id,name,description,price}
    // redirect the client to the /product route
    res.redirect('/product')
}
const deletehandler=(req,res)=>{
    // get the id from the req (since it's a param, we could access is using req.params)
    const {id}= req.params
    // delete the element with id index in the array 
    data.splice(id,1)
    // redirect the client to the /product route
    res.redirect('/product')
}

module.exports={getProductPage,getEditPage,createHandler,editHandler,deletehandler}