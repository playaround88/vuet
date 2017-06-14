var express = require('express');
var router = express.Router();
var tpl = require('../modules/tpl.js');

//创建更新一个模板
router.post('/', function (req, res, next) {
    //_id非空，更新数据
    var id=req.body['_id'];
    if (id) {
        delete req.body['_id'];
        tpl.update(id, req.body, function (err, result) {
            if (err) {
                console.log(err);
            }

            console.log(result);
            if (result.result.ok) {
                res.json({ msg: '更新成功' });
            } else {
                res.json({ msg: '更新失败' });
            }
        });
        return ;
    }

    //如果_id为空，添加到数据库
    tpl.save(req.body, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);

        if (result.result.ok) {
            res.json({ msg: '保存成功', id: result.insertedIds });
        } else {
            res.json({ msg: '保存失败' });
        }
    });

});

//删除一个模板
router.post('/del/:id', function (req, res, next) {

});

//加载一个模板
router.get('/:id', function (req, res, next) {
    tpl.getById(req.params['id'], function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);

        res.jsonp(result);
    });
});

//通过groupid查询所有模板
router.get('/group/:gid', function (req, res, next) {

});


module.exports = router