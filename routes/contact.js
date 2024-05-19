const express = require('express');
const router = express.Router();
const dayMiddleware = require('../Middlewares.js/Time.Middleware');

router.get('/contact', dayMiddleware,(req, res) => {
    res.render("contact")
});

module.exports = router;