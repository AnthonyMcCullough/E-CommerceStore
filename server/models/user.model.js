const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema({ 

    email: {
        type: String,
        required: [true, "email is required!"],
        minLength: [7, "Min email length is 7 chars."],
        maxLength: [100, "Max email length is 100 chars."],

    },
    username: {
        type: String,
        required: [true, "username is required!"],
        minLength: [5, "Min username length is 5 characters."],
        maxLength: [20, "Max username length is 20 characters"]
    },
    password: {
        type: String,
        required: [true, "password is required!"],
        minLength: [5, "Min password length is 5 characters."],
        maxLength: [20, "Max password length is 20 characters"]

    }
})



const User = mongoose.model("User", UserSchema)






const ReciptSchema = new mongoose.Schema({


    userID: mongoose.Schema.Types.ObjectId,
   

    purchases: [{
        productTitle: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        productPic: String
    }],
    totalPrice: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    date: Date,
    isPaid: Boolean,
    



})


const Recipt = mongoose.model("Recipt", ReciptSchema)

module.exports = { Recipt, User };