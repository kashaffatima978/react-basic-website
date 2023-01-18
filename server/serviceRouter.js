var express=require("express");
const app = require("./index");
var router=express();
router.use(express.json());
const Service=require("./serviceModel");
const cors = require("cors");

router.options("*", cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

router.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));



// View all Services
router.get('/',async (req,res,next)=>{
    try{
    const services= await Service.find();
    res.send(services);
    }
    catch(err){
        res.send("err");
    }
});

// View one particular Service
router.get('/:id',async (req,res,next)=>{
    try{
    const service= await Service.findOne({"_id":req.params.id});
    res.send(service);
    }
    catch(err){
        res.send("err");
    }
});

// Post services
router.post('/',function(req,res,next){
    const service=new Service(req.body);
    service.save().then(()=>{res.send('200')}).catch((err)=>{console.log(err)});
});

module.exports = router;