const mongoose=require("mongoose");

const ServicesSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId
    }, 
    name:{
        type: String,
        required:true,
    },
    category:{
        type: String,
        required:true,
    },
    features: [{type: String}],
    description:{
        type: String,
    }
});

const Service=new mongoose.model("Service",ServicesSchema);
module.exports=Service;