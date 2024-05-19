const express = require('express');
const router = express.Router();
const dayMiddleware = require('../Middlewares.js/Time.Middleware');

router.get('/',dayMiddleware, (req, res) => {
    res.render("base")
});

module.exports = router;