var express = require('express');
var router = express.Router();

//创建更新一个模板
router.post('/',function(req,res,next){

});

//删除一个模板
router.post('/del/:id',function(req,res,next){

});

//加载一个模板
router.get('/:id',function(req,res,next){

});

//通过groupid查询所有模板
router.get('/group/:gid',function(req,res,next){

});


module.exports = router