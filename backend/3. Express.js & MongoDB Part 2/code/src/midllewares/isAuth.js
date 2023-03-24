
const isAuth= (req,res,next)=>{
    if(!req.session.userID){
        res.redirect('/auth/login')
    }
    next();
}
module.exports= isAuth