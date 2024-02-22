const express = require('express')
const router = express.Router()
const urlController = require('../controllers/urlControllers')


router.post('/shorten', urlController.shortenUrl);
router.get('/:shortCode', urlController.redirectToOriginalUrl)

module.exports = router