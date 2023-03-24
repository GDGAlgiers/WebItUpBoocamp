const express= require('express');
const createError= require('http-errors')
const authRoute= require('./src/routes/authRoute')
const productRoute= require('./src/routes/productRoute')
const morgan= require('morgan')
const path= require('path')
const bodyParser= require('body-parser')
require('dotenv').config()
const connectDB= require('./src/config/dbConfig')
const session= require('express-session')
const MongoDBSession= require('connect-mongo')
const isAuth= require('./src/midllewares/isAuth')


const app = express();
connectDB();

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

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    store: MongoDBSession.create({
        mongoUrl:process.env.DB_URL
    })
}))

/*  Route Definitions  */
app.get('/',(req,res)=>{
    res.render('home',{title:"home page"})
})

// protecting the route using our middleware (so you cant check the products if you are not logged in)
app.use('/product',isAuth,productRoute)

app.use('/auth',authRoute)



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