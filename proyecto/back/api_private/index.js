const router = require('express').Router();
const controller = require('./controller');

router.get('/',controller.probarGet);
router.post('/',controller.objectReceivedToTraslate);

module.exports = router;