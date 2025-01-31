const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const { authenticateUser } = require("../middleware/authMiddleware");

// GET all clients
router.get('/', clientController.getClients);

// GET a single client by ID
router.get('/:id', clientController.getClient);

// POST a new client testimonial
router.post('/', authenticateUser, clientController.addClient);

// DELETE a client testimonial
router.delete('/:id', authenticateUser, clientController.deleteClient);

module.exports = router;
