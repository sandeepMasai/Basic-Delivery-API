const express = require('express');
const router = express.Router();
const { uuid } = require('uuid');
const deliveries = require('../data/deliveries');
const { validateCreateDelivery, validateUpdateStatus } = require('../middleware/validate');

// Create new delivery
router.post('/', validateCreateDelivery, (req, res) => {
  const { pickup, drop, status = 'pending' } = req.body;
  const newDelivery = {
    id: uuid(),
    pickup,
    drop,
    status,
  };
  deliveries.push(newDelivery);
  res.status(201).json(newDelivery);
});

// Get all deliveries (filtering)
router.get('/', (req, res) => {
  const { status } = req.query;
  if (status) {
    const filtered = deliveries.filter(d => d.status === status);
    return res.json(filtered);
  }
  res.json(deliveries);
});

// Update delivery status
router.put('/:id/status', validateUpdateStatus, (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  const delivery = deliveries.find(d => d.id === id);
  if (!delivery) {
    return res.status(404).json({ error: 'Delivery not found' });
  }
  delivery.status = status;
  res.json(delivery);
});

// Delete a delivery 
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = deliveries.findIndex(d => d.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Delivery not found' });
  }
  deliveries.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
