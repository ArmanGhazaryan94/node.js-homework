const program = require('commander');
const action = require('./cli-actions');

program
    .version('0.1.0')
    .option('-a, --action <action>', 'action')
    .option('-f, --file <path> [path]', 'file')
    .option('-p, --path <filePath>', 'CSS File path')
    .parse(process.argv);

if (typeof program.action === 'function') {
    process.stdout.write('WARNING: You should write down at least one option!\n');
    program.help();
} else {
    action(program);
}
