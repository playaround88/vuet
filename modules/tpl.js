var db=require('./mongo_conf').db;
var ObjectID = require('mongodb-core').BSON.ObjectID;


db.bind('tpl').bind({
    save:function(obj,callback){
        this.insert(obj,callback);
    },
    update:function(id,value,conf,callback){
        conf = conf||{upsert:true};
        this.updateOne({_id:ObjectID(id)},value,conf,callback);
    },
    del:function(query,callback){
        this.deleteOne(query,callback);
    },
    delById:function(id,callback){
        this.deleteOne({_id:ObjectID(id)},callback);
    },
    getById:function(id,callback){
        this.findOne({_id:ObjectID(id)},callback);
    }
});

module.exports = db.tpl;