const express = require('express');
const router = express.Router();
const dayMiddleware = require('../Middlewares.js/Time.Middleware')

router.get('/home', dayMiddleware, (req, res) => {
    res.render("home")
});

module.exports = router;