const mongoose = require("mongoose")
async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Connect successfully')
    }catch(error){
        console.log(error)
        console.log('Connect failed')

    }
}




module.exports = {connect}