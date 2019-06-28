let {createServer} = require("http");
let url = require("url");
let ecstatic = require("ecstatic");
let port = process.argv[2];
let fileServer = ecstatic({root:"."});

if(!port) {
  console.log("No port found");
  process.exit(1);
}

let server = createServer((request, response) => {

  path = url.parse(request.url, true).pathname;

  if (path === "/") {
    fileServer(request, response);
  } else if (path === "/xxx") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/json;charset=utf-8");
    response.setHeader("Access-Control-Allow-Origin", "http//kalagala.xyz");
    response.write(`
      {
        "a":"apple",
        "b":"banana",
        "c":"cat",
        "d":"dog"
      }
      `);
    response.end();
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write('!!!');
    response.end();
  }
})

server.listen(port);
