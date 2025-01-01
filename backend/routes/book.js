const express = require('express');
const { getBooksFromGoogle } = require('../controllers/bookController');

const router = express.Router();

router.get('/search', getBooksFromGoogle);

module.exports = router;
