const http = require("http");

const PORT = 8080;
const server = http.createServer(requestHandler);

function requestHandler(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello world');
}

server.listen(PORT, () => console.log(`listening on port ${PORT}`));