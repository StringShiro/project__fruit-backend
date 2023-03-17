const mongoose = require("mongoose")
async function connect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1/mydb",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Connect successfully')
    }catch(error){
        console.log(err)
        console.log('Connect failed')

    }
}

module.exports = {connect}