const { Admin, Product, Images } = require("../models/admin.model");


module.exports = {

    findAdmin: (req, res) => {
        
        console.log('find admin', req.params)

        Admin.findOne({ username: req.params.username, password: req.params.password })
            .then(found => {
                if (found) {
                    res.json({ found })
                } else {
                    res.json({ found: false })
                }
            })
            .catch(err => console.log('find user error', err))


    },
    findProducts: (req, res) => {
        
        Product.find()
            .populate('images')
            .exec()
            .then(recipts => res.json({ results: recipts }))
            .catch(err => res.json({ error: err }))
    },

    postProduct: (req, res) => {
        
        Product.create(req.body)
            .then(created => res.json(created))
            .catch(err => console.log('create user error', err))
    },

    updateTitle: (req, res) => {
        console.log(req.body)
        Product.findByIdAndUpdate({ _id: req.params.id }, { "title": req.body.title }, { new: true, runValidators: true })
            .populate('images')
            .exec()
            .then(updated => {
                console.log(updated)
                return res.json({ results: updated })
            })
            .catch(err => res.json({ error: err }))
    },
    updateDescription: (req, res) => {
        console.log(req.body)
        Product.findByIdAndUpdate({ _id: req.params.id }, { "description": req.body.description }, { new: true, runValidators: true })
            .populate('images')
            .exec()
            .then(updated => {
                console.log(updated)
                return res.json({ results: updated })
            })
            .catch(err => res.json({ error: err }))
    },
    updatePrice: (req, res) => {
        console.log(req.body)
        Product.findByIdAndUpdate({ _id: req.params.id }, { "price": req.body.price }, { new: true, runValidators: true })
            .populate('images')
            .exec()
            .then(updated => {
                console.log(updated)
                return res.json({ results: updated })
            })
            .catch(err => res.json({ error: err }))
    },
    updateGender: (req, res) => {
        console.log(req.body)
        Product.findByIdAndUpdate({ _id: req.params.id }, { "gender": req.body.gender }, { new: true, runValidators: true })
            .populate('images')
            .exec()
            .then(updated => {
                console.log(updated)
                return res.json({ results: updated })
            })
            .catch(err => res.json({ error: err }))
    },
    updateOnSale: (req, res) => {
        console.log(req.body)
        Product.findByIdAndUpdate({ _id: req.params.id }, { "isOnSale": req.body.isOnSale }, { new: true, runValidators: true })
            .populate('images')
            .exec()
            .then(updated => {
                console.log(updated)
                return res.json({ results: updated })
            })
            .catch(err => res.json({ error: err }))
    },
    updateSaleOff: (req, res) => {
        console.log(req.body)
        Product.findByIdAndUpdate({ _id: req.params.id }, { "saleOff": req.body.saleOff }, { new: true, runValidators: true })
            .populate('images')
            .exec()
            .then(updated => {
                console.log(updated)
                return res.json({ results: updated })
            })
            .catch(err => res.json({ error: err }))
    },
    deleteProduct: (req, res) => {
        Product.findByIdAndRemove(req.body.id)
            .then(Deleted => res.json(Deleted))
            .catch(err => console.log(err))
    },

    getProduct: (req, res) => {
        console.log('get product route', req.params)

        Product.findById(req.params.id)
            .populate('images')
            .exec()
            .then(found => res.json(found))
            .catch(err => console.log('get product error', err))
    },

    newImage: (req, res) => {

        Images.create(req.body)

            .then(created => {

                Product.findByIdAndUpdate(req.body.product, { $push: { 'images': created._id } }, { new: true })
                    .then(updated => res.json(updated))
                    .catch(err => console.log('update product failed', err))
            })
            .catch(err => console.log('create image error', err))

    },

    getImages: (req, res) => {

        Images.find({ product: req.params.id })
            .then(found => res.json(found))
            .catch(err => console.log('get images error', err))
    },
    getMensProducts: (req, res) => {

        Product.find({ "gender": "male" })
            .populate('images')
            .exec()
            .then(found => res.json(found))
            .catch(err => console.log('mens products error', err))
    },
    getWomensProducts: (req, res) => {

        Product.find({ "gender": "female" })
            .populate('images')
            .exec()
            .then(found => res.json(found))
            .catch(err => console.log('womens products error', err))
    }



}