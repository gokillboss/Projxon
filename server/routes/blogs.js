const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

// GET all products
router.get('/', blogController.getBlogs)

// GET a single product
router.get('/:id', blogController.getBlog)

module.exports = router;