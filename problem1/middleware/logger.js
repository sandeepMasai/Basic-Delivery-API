module.exports = (req, res, next) => {
  const timestamp = new Date();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
};
