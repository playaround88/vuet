/*
* js 原生服务器代码的写法
*/
var http = require('http')
var url = require('url')

var server = http.createServer((request, response) => {
    //
    var uri = url.parse(request.url)
    console.dir(uri)
    /*
    {
    href: '/status?name=ryan',
    search: '?name=ryan',
    query: 'name=ryan',
    pathname: '/status'
    }
    */

    response.end()
});

server.listen(8000);