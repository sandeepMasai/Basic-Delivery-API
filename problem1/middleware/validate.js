const validStatuses = ['pending', 'in-transit', 'delivered'];

exports.validateCreateDelivery = (req, res, next) => {
  const { pickup, drop } = req.body;
  if (!pickup || !drop) {
    return res.status(400).json({ error: 'Missing required fields: pickup, drop' });
  }
  next();
};

exports.validateUpdateStatus = (req, res, next) => {
  const { status } = req.body;
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
  }
  next();
};
