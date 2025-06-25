const express = require('express');
const deliveriesRouter = require('./routes/deliveries');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 2025;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/deliveries', deliveriesRouter);
app.get('/',(req,res)=>{
    res.json('server test run')
})
// Error Handling Middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
