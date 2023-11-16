const { User } = require("../models/user.model");


module.exports = {

    create: (req, res) => {
       

        User.findOne({ username: req.body.username })
            .then(found => {
                if (found) {
                    res.json({ error: true })
                } else {
                    User.create(req.body)
                        .then(created => res.json(created))
                        .catch(err => console.log('create user error', err))
                }
            })
            .catch(err => console.log('find user error', err))


    },
    findUser: (req, res) => {
        

        User.findOne({ username: req.params.username, password: req.params.password })
            .then(found => {
                if (found) {
                    res.json({ found })
                } else {
                    res.json({ found: false })
                }
            })
            .catch(err => console.log('find user error', err))


    },
    updateUserName: (req, res) => {
        console.log('update user route', req.body)

        User.findOne({ username: req.body.username })
            .then(found => {
                if (found) {
                    res.json({ error: true })
                } else {

                    User.findByIdAndUpdate(req.body.id, { username: req.body.username }, { new: true })
                        .then(updated => res.json(updated))
                        .catch(err => console.log('updated user error', err))

                }
            })

    },
    updateUserPassword: (req, res) => {

        console.log('update user route', req.body)

        User.findByIdAndUpdate(req.body.id, { password: req.body.password }, { new: true })
            .then(updated => res.json(updated))
            .catch(err => console.log('updated user error', err))
    },

    deleteUser: (req, res) => {
        User.findByIdAndRemove(req.body.id)
            .then(Deleted => res.json(Deleted))
            .catch(err => console.log(err))
    },
    getUser: (req, res) => {

        User.findById(req.params.id)
            .then(found => res.json(found))
            .catch(err => console.log('get user error', err))
    }
}