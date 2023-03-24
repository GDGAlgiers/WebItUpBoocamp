const mongoose= require('mongoose')

const connectDB= ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true
    }).then(()=>{
        console.log("Db connected!");
    }).catch(e=>{
        console.log(`something went wrong: ${e.message}`);
    })
}

module.exports=connectDB