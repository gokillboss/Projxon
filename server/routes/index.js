const express = require('express');
const router = express.Router();
const blogRoute = require('./blogs');
const userRoute = require('./users');
const clientRoute = require('./clients');
const authRoute = require('./authRoutes');


router.get('/', (req, res) => {
    res.send('API is working');
});

router.use('/blogs', blogRoute);
// router.use('/users', userRoute);

router.use('/clients', clientRoute);

router.use('/auth', authRoute);

module.exports = router;