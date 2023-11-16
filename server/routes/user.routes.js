
const UserController = require("../controllers/user.controller")
const ReciptController = require("../controllers/recipt.controller")

module.exports = app => {
    
    app.get("/find/:username/:password", UserController.findUser),
        app.post("/createNewUser", UserController.create),
        app.post("/postRecipt", ReciptController.create),
        app.get("/findrecipts/:id", ReciptController.findUsersPurchases),
        app.get("/recipt/:rId", ReciptController.oneRecipt),
        app.patch("/update/:rId", ReciptController.update)

        app.delete("/deleteRecipt/:rId",ReciptController.deleteRecipt)


        app.put("/updateUserName", UserController.updateUserName)
        app.put("/updateUserPassword", UserController.updateUserPassword)
        app.delete("/deleteUser",UserController.deleteUser)
        app.get('/getUser/:id', UserController.getUser)
}