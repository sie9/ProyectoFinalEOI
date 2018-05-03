const router = require('express').Router();
const controller = require('./controller');

router.get('/',controller.probarGet);
router.post('/',controller.msgReceived);




module.exports = router;