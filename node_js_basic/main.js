var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function (request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, fileList) {
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = '<ul>';
          var filePos = 0;

          while (filePos < fileList.length) {
            list = list + `<li><a href="/?id=${fileList[filePos]}">${fileList[filePos]}</a></li>`;
            ++filePos;
          }
          list = list + '</ul>';

          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
        });
      } else{
        fs.readdir('./data', function(error, fileList) {
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = '<ul>';
          var filePos = 0;

          while (filePos < fileList.length) {
            list = list + `<li><a href="/?id=${fileList[filePos]}">${fileList[filePos]}</a></li>`;
            ++filePos;
          }
          list = list + '</ul>';

          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
            var title = queryData.id;
            var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else{
      response.writeHead(404);
      response.end('Not Found');
    }
});
app.listen(80); // 3000번 포트를 통해 연결된 서버에 js 파일을 실행시킴
