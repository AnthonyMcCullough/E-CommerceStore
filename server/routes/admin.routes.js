const AdminController = require("../controllers/admin.controller")


module.exports = app => {

    app.get("/findAdmin/:username/:password", AdminController.findAdmin),

        app.get("/findProducts", AdminController.findProducts),

        app.post("/postProduct", AdminController.postProduct),



        app.patch("/updateTitle/:id", AdminController.updateTitle),
        app.patch("/updateDescription/:id", AdminController.updateDescription),
        app.patch("/updatePrice/:id", AdminController.updatePrice),
        app.patch("/updateGender/:id", AdminController.updateGender),
        app.patch("/updateOnSale/:id", AdminController.updateOnSale),
        app.patch("/updateSaleOff/:id", AdminController.updateSaleOff),
        app.delete("/deleteProduct", AdminController.deleteProduct),




        app.get('/getProduct/:id', AdminController.getProduct),

        app.post('/newImage', AdminController.newImage),

        app.get('/images/:id', AdminController.getImages),

        app.get('/mensProducts', AdminController.getMensProducts),
        app.get('/womensProducts', AdminController.getWomensProducts)
}