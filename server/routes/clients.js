const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

// GET all clients
router.get('/', clientController.getClients);

// GET a single client by ID
router.get('/:id', clientController.getClient);

module.exports = router;
