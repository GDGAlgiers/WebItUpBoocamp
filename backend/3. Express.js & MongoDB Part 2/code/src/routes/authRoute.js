const route= require('express').Router();
const {getloginPage,getRegisterPage,logingHandler,registerHandler,logoutHandler}= require('../controllers/authController')
route.get('/login',getloginPage)
route.get('/register',getRegisterPage)

route.post('/login',logingHandler)
route.post('/register',registerHandler)
route.get('/logout',logoutHandler)

module.exports=route