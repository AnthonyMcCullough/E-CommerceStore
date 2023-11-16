require("dotenv").config() 

const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const mongoose = require('mongoose') 

const { Admin } = require('./models/admin.model')

require('./config/user.config');



app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors()); 

const Routes = require('./routes/user.routes');
const AdminRoutes = require('./routes/admin.routes')

Routes(app);
AdminRoutes(app)

// Admin.create({
//     username: "CompanyAdmin",
//     password: "12345678"

// })
//     .then(res => console.log("Admin res from server", res))
//     .catch(err => console.log("Admin Error from server", err))




app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));