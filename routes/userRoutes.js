const mongoose = require('mongoose');
const Users = mongoose.model('users');

module.exports = (app) => {
    const error = {
        error: true,
        message: "Internal Server Error"
    }
    app.post(`/api/users`, async (req, res) => {
        console.log("into", req.body)
        let user = await Users.find(req.body);
        console.log("user:", user)
        if (user) {
            return res.status(200).send(user);
        } else {
            return res.status(500).send(error);
        }
    });

    app.post(`/api/signup`, async (req, res) => {
        console.log("req.....", req.body)
        let user = await Users.create(req.body);
        if (user) {
            return res.status(201).send({
                error: false,
                user
            })
        } else {
            return res.status(500).send(error);
        }
    })

    // app.get(`/api/form/:id`, async (req, res) => {
    //     const { id } = req.params;
    //     let form = await Forms.findById(id);
    //     if (form) {
    //         return res.status(200).send({
    //             error: false,
    //             form
    //         })
    //     }
    //     else {
    //         return res.status(500).send(error)
    //     }

    // });

}
