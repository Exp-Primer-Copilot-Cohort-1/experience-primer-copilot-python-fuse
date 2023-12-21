// Create web server
// 1. Import express
const express = require('express');
// 2. Create router
const router = express.Router();
// 3. Import controller
const commentsController = require('../controllers/commentsController');

// 4. Create route
router.get('/', commentsController.index);

// 5. Export router
module.exports = router;