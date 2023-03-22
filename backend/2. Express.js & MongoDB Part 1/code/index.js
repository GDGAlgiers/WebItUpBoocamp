const express= require('express');
const createError= require('http-errors')
const productRoute= require('./src/routes/productRoute')
const morgan= require('morgan')
const path= require('path')
const bodyParser= require('body-parser')

const app = express();

/*  Setup our view engines */    

// setup where the server can found the template to use
app.set('views',path.join(__dirname,'src/views'))

// setup ejs as view engine for our server
app.set('view engine','ejs')

/*  setup our middlewares   */

// setup morgan to log the requests
app.use(morgan('dev'))

// setup the body parser to access the req.body sent in the request
app.use(bodyParser.urlencoded({
    extended:true
}))

/*  Route Definitions  */
app.get('/',(req,res)=>{
    res.render('home',{title:"home page"})
})

app.use('/product',productRoute)



/* Error middlewares */

// in case we have a request to an unknown route
app.use((req,res,next)=>{
    next(new createError.NotFound())
})

// in case we had any type of error
app.use((err,req,res,next)=>{
    res.status= err.status||500;
    res.send({
        status:err.status||500,
        message:err.message
    })
})


// init the server on the port 3000
app.listen(3000,()=>{
    console.log('server is running, hello from the web it up bootcamp');
})