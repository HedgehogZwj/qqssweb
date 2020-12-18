var express = require('express');
var router = express.Router();
var iot = require('../controller/iot');

router.put('/led/:id/:status', iot.led)
router.put('/tem/:id/:value', iot.tem)
router.put('/hum/:id/:value', iot.hum)
router.put('/air/:id/:status', iot.air)
router.put('/fan/:id/:status', iot.fan)
router.put('/warm/:id/:status', iot.warm)
router.put('/addhum/:id/:status', iot.addhum)

module.exports = router;