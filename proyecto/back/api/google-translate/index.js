const router = require('express').Router();
const controller = require('./google-translate.controller.js');

router.post('/msg-language', controller.detectecLanguage);
router.post('/', controller.translateMsg);

module.exports = router;
