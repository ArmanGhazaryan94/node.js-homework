const http = require('http');
const fs = require("fs");
const Transform = require('stream').Transform;

const PORT = 8080;
const server = http.createServer(requestHandler);

class ReplaceText extends Transform {
    constructor(text) {
        super();
        this.text = text;
    }
    _transform(chunk, encoding, done) {
        let modifiedChunk = chunk.toString('utf8');
        modifiedChunk = modifiedChunk.replace(/{message}/g, this.text);

        this.push(modifiedChunk);
        done();
    }
}

function requestHandler(request, response) {
    const readStream = fs.createReadStream(`${__dirname}/index.html`, 'utf8');
    const replaceStream = new ReplaceText('Hello, World');

    response.setHeader('Content-Type', 'text/html');
    readStream
        .pipe(replaceStream)
        .pipe(response);
}

server.listen(PORT, () => console.log(`listening on port ${PORT}`));