const express = require('express');
const router = express.Router();

const conversation = require('./controllers/conversion');
const {convertNumbers} = require('../utils/convertMiddleware');

router.post('/', convertNumbers, conversation.getNumbers);

module.exports = router;

