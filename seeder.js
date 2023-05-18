const fs = require('fs')
const mongoose = require('mongoose')
require('dotenv').config()

//product modal
const ProductModal = require('./Modals/dashModal')



//read json file
const products = JSON.parse(
    fs.readFileSync(`${__dirname}/jsondata.json`,'utf8')
)

//function to add bulk data
const addData = async()=>{
    try{
        await ProductModal.create(products);
        console.log('data inserted');
        process.exit()
    }catch(err){
        console.log('err',err)
    }
}


//function to delete bulk data
const deleteData = async()=>{
    try{
        await ProductModal.deleteMany();
        console.log('data deleted');
        process.exit()
    }catch(err){
        console.log('err',err)
    }
}


//connect to mongodb and run child function
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log('mongoDb Connected')
    // addData()
}).catch((err)=>{
    console.log('error connecting mongo',err)
})

