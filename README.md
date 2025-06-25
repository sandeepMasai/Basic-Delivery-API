#### Basic Delivery API
# Delivery API - Express.js

A simple Delivery Management API built with Node.js and Express.js.

## Features

- Create delivery orders
- View all deliveries (with optional status filter)
- Update delivery status
- Delete a delivery
- Middleware: logging, validation, and error handling

## Setup Instructions

1. Clone the repo
2. Run `npm install`
3. Start the server: `node index.js`

## API Endpoints

### POST /deliveries
Create a delivery

**Body:**
```json
{
  "pickup": "Location A",
  "drop": "Location B",
  "status": "pending" // optional
}
GET /deliveries
Returns all deliveries
Supports optional query param: ?status=pending

PUT /deliveries/:id/status
Update delivery status

DELETE /deliveries/:id
Deletes a delivery

Middleware
Logger: Logs method, URL, and timestamp

Validation: Checks required fields and valid status

Error Handler: Handles unexpected errors

##### Tech Stack
Node.js
Express.js

