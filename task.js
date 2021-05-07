const program = require('commander')
const validation_for_action = require('./validation_for_action')
const validation_for_shift = require('./validation_for_shift')

program
    .option('-s, --shift <number>', 'a shift')
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file')
    .option('-a, --action <action>', 'an action encode/decode');
program.parse(process.argv);

options = program.opts();

validation_for_action(options.action)

validation_for_shift(options.shift)

// if (options.shift) console.log(options.shift);
// if (options.action) console.log(options.action);
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);