module.exports ={
    mutipleMongooseObject: function(mongooseArrays){
        return mongooseArrays.map(mongoose => mongoose.toObject())
    },
    mongooseToObject:function(mongooose){
        return mongoose ? mongoose.toObject(): mongoose;
    }
}