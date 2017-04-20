var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示登陆界面
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//登录操作
router.post('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//主页面
router.get('/main',function(req,res,next){
  res.render('main', { title: 'Express' });
})

module.exports = router;
