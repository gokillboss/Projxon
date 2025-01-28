const express = require('express');
const router = express.Router();
const blogRoute = require('./blogs');
const userRoute = require('./users');
const emailRoute = require('./emails');

router.get('/', (req, res) => {
    res.send('API is working');
});

router.use('/blogs', blogRoute);
// router.use('/users', userRoute);
router.use('/emails', emailRoute);


module.exports = router;