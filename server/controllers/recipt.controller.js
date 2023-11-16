const { Recipt } = require("../models/user.model");


module.exports = {
    create: (req, res) => {
        
        Recipt.create(req.body)
            .then(created => res.json(created))
            .catch(err => console.log('create user error', err))
    },

    findUsersPurchases: (req, res) => {
        
        Recipt.find({ userID: req.params.id })
            .then(recipts => res.json({results: recipts}))
            .catch( err => res.json({error: err}))
    },
    oneRecipt: (req, res) => {
        console.log("this is the req.params obj.. just an obj", req.params)
        Recipt.findOne( {_id: req.params.rId })
            .then(oneRecipt => {
                console.log("Successfully created: ". oneRecipt)
                res.json({results: oneRecipt})
            })
            .catch(err => {
                console.warn(err)
                return res.json(err)
            })
    },
    update: (req, res) => {
        console.log(req.body)
        Recipt.findByIdAndUpdate({_id: req.params.rId}, req.body, { new: true, runValidators: true })
            .then(updatedRecipt => {
                console.log(updatedRecipt)
                return res.json({results: updatedRecipt})
            })
            .catch(err => res.json({error: err}))
    },
    deleteRecipt: (req,res) => {

        Recipt.findByIdAndRemove({_id:req.params.rId})
        .then(Deleted => res.json(Deleted))
        .catch(err => console.log(err))
    }




}



