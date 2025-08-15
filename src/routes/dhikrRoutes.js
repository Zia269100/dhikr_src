const express = require('express');
const router = express.Router();
const { getTotal, saveDhikr } = require('../controllers/dhikrController');

router.get('/total', getTotal);
router.post('/save', saveDhikr);

module.exports = router;
