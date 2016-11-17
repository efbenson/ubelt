#!/usr/bin/env node
'use strict';

const program = require('commander');

const loader = require('./lib/loader');

loader.init();

//const options = loader.getOptions();
const commands = loader.getCommands();

program
  .version(require('./package.json').version);

for(const command of commands) {
    program.command(command.name)
        .on('--help', function() { console.log(command.descr);})
        .action(command.exec);
}

program.parse(process.argv);

//loader.exec(program);

// console.log('you ordered a pizza with:');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');
// console.log('  - %s cheese', program.cheese);