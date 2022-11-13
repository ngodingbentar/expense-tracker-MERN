const routes = require('express').Router();

routes.route('/api/cek')
    .get((req, res) => {
        res.json("Hello World");
    })
module.exports = routes;