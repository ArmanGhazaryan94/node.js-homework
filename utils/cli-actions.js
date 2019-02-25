const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

const actions = {
    reverse,
    transform,
    outputFile,
    convertFromFile,
    convertToFile,
};

function reverse() {
    process.stdout.write('Write text to reverse\n');
    process.stdin.on('data', function (text) {
        process.stdout.write(`${text.reverse()}\n`);
        process.exit();
    });
}

function transform() {
    process.stdout.write('Write text to transform to uppercase\n');
    process.stdin.on('data', function (text) {
        process.stdout.write(`${text.toString().toUpperCase()}\n`);
        process.exit();
    });
}

function outputFile(program) {
    const { file } = program;

    checkFileExist(file);

    const stream = fs.createReadStream(path.join(__dirname, file), 'utf8');
    stream.on('data', chunk => process.stdout.write(`${chunk}\n`));
}

function convertFromFile(program) {
    const { file } = program;

    checkFileExist(file);
    isCSVFile(file);

    const filePath = path.join(__dirname, file);
    const readStream = fs.createReadStream(filePath, 'utf8');

    readStream.on('error', err => console.log(err));
    readStream.on('data', chunk => {
        csv()
            .fromString(chunk)
            .subscribe(console.log);
    });
}

function convertToFile(program) {
    const { file } = program;

    checkFileExist(file);
    isCSVFile(file);

    const filePath = path.join(__dirname, file);
    const filename = path.basename(filePath, '.csv');
    const readStream = fs.createReadStream(filePath, 'utf8');
    const writeStream = fs.createWriteStream(path.join(__dirname, `../data/${filename}.json`));

    readStream
        .pipe(csv())
        .pipe(writeStream);
}

function checkFileExist(file) {
    if (!file) {
        process.stdout.write('ERR: You should set file path (--file=${PATH})\n');
        process.exit();
    }
}

function isCSVFile(file) {
    if (path.extname(file) !== '.csv') {
        process.stdout.write(`ERR: To convert file you need to provide a .CSV file!\n`);
        process.exit();
    }
}

module.exports = function (program) {
    const { action } = program;
    if (actions.hasOwnProperty(action)) {
        actions[action](program);
    } else {
        process.stdout.write('ERR: Provided action is not supported!\n');
    }
};