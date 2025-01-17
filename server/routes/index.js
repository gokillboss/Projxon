const express = require('express');
const router = express.Router();
const blogRoute = require('./blogs');
const userRoute = require('./users');
const clientRoute = require('./clients')


router.get('/', (req, res) => {
    res.send('API is working');
});

router.use('/blogs', blogRoute);
// router.use('/users', userRoute);

router.use('/clients', clientRoute)

module.exports = router;