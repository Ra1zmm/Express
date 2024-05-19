const express = require('express');
const router = express.Router();
const dayMiddleware = require('../Middlewares.js/Time.Middleware')

router.get('/services',dayMiddleware, (req, res) => {
    res.render("services")
});

module.exports = router;