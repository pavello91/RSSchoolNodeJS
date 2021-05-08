const program = require('commander')
const { pipeline } = require('stream');

const validation_for_shift = require('./validation_for_shift')
const validation_for_action = require('./validation_for_action.js')

const work_with_input = require('./stream/work_with_input')
const work_with_transform = require('./stream/work_with_transform')
const work_with_output = require('./stream/work_with_output')

program
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file')
    .option('-a, --action <action>', 'an action encode/decode');
program.parse(process.argv);

options = program.opts();
//validation_for_action_and_shift(options.action, options.shift)
validation_for_shift(options.shift)
validation_for_action(options.action)

const readableStream = work_with_input(options.input, "utf8");
const transformStream = work_with_transform(options.action, options.shift);
const writableStream = work_with_output(options.output, "utf8");

pipeline(readableStream, transformStream, writableStream, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Операция ' + options.action + ' прошла успешно');
    }
});