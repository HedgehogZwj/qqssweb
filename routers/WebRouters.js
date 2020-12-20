var express = require('express');
var router = express.Router();
var web = require('../controller/web');

router.post('/login', web.login);
router.post('/update', web.update);
router.put('/SetLED', web.SetLED);
router.put('/SetFAN', web.SetFAN);
router.put('/SetAIR', web.SetAIR);
router.put('/SetWARM', web.SetWAR);
router.put('/SetADDHUM', web.SetADDHUM);
router.put('/SetMINTEM', web.SetMINTEM);
router.put('/SetMAXTEM', web.SetMAXTEM);
router.put('/SetHUM', web.SetHUM);
router.get('/TEM', web.getTEM);
router.get('/HUM', web.getHUM);
router.get('/device/:type/:id', web.query);//查询
router.delete('/device/:type/:id', web.delete);//删除
router.put('/device', web.updevice)//修改
router.post('/device', web.add)//添加
module.exports = router;