const router = require('express').Router();
const {RevenueControllers} = require('../controllers');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/revenues',authMiddleware , RevenueControllers.getAllRevenues);
module.exports = router