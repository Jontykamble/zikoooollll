const mongoose = require('mongoose');
const mongoURI="mongodb://jk:Jonty1@ac-lvfxodw-shard-00-00.hd4rtaq.mongodb.net:27017,ac-lvfxodw-shard-00-01.hd4rtaq.mongodb.net:27017,ac-lvfxodw-shard-00-02.hd4rtaq.mongodb.net:27017/food?ssl=true&replicaSet=atlas-12mc0s-shard-0&authSource=admin&retryWrites=true&w=majority"



const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
        if(err)console.log("---",err)
        else{
    console.log("connect");
    const fetched_data=await mongoose.connection.db.collection("f2");
    fetched_data.find({}).toArray( async function(err,data){
        const foodCategory=await mongoose.connection.db.collection("f")
        foodCategory.find({}).toArray(function(err,catData){
            if(err)console.log(err)
            else{
        global.food_item=data
        global.foodCategory=catData
    
    
    
    }



        })
       //  if(err)console.log(err);
       // else {
       //     global.food_item=data;
       //     console.log(global.food_item)
       // }
    })
    }
    })

}


module.exports=mongoDB()