
require("dotenv").config()

const mongoose = require('mongoose');
 


mongoose.connect(`mongodb://127.0.0.1/${process.env.DATABASE_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})  .then(() => console.log(`Established connection with DB - ${process.env.DATABASE_NAME} `))
    .catch(err => console.log(err))