var express = require('express');
var router = express.Router();
var web = require('../controller/web');

router.post('/login', web.login);
router.post('/update', web.update);
router.put('/SetLED', web.SetLED);
router.put('/SetFAN', web.SetFAN)
router.get('/device/:type/:id', web.query);//查询
router.delete('/device/:type/:id', web.delete);//删除
router.put('/device', web.updevice)//修改
router.post('/device', web.add)//添加
module.exports = router;