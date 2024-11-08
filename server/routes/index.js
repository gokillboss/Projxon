const express = require('express');
const router = express.Router();
const blogRoute = require('./blogs');
const userRoute = require('./users');


router.get('/', (req, res) => {
    res.send('API is working');
});

router.use('/blogs', blogRoute);
router.use('/users', userRoute);


module.exports = router;