var mongo = require('mongoskin');

var db = mongo.db('mongodb://localhost:27017/vuet',{native_parser:true});

process.on('SIGINT', function() {
    console.log('Recieve SIGINT');
    db.close(function(){
        console.log('database has closed');
    })
});

exports.db=db;