var express = require('express');
var router = express.Router();

//查询当前用户所有分组
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//创建或更新分组
router.post('/',function(req,res,next){

});

//删除分组
router.post('/del/:id',function(req,res,next){

});

//查看分组
router.get('/:id',function(req,res,next){

});

module.exports = router;

