const mongoose = require('mongoose'); 

const AdminSchema = new mongoose.Schema({ 

    username: String,
    password: String
})



const Admin = mongoose.model("Admin", AdminSchema)




const ProductSchema = new mongoose.Schema({ // 


    title: {
        type: String
    },
    description: {
        type: String

    },
    price: {
        type: Number

    },
    isOnSale: {
        type: Boolean
    },
    saleOff: {
        type: Number

    },
    gender: {
        type: String
    },
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: "images" }]
})



const Product = mongoose.model("Product", ProductSchema)


const ImageSchmea = new mongoose.Schema({
    description: String,
    path: String,
    product: mongoose.Schema.Types.ObjectId
})

const Images = mongoose.model('images', ImageSchmea)


module.exports = { Admin, Product, Images };





