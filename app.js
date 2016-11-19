#!/usr/bin/env node
'use strict';

const program = require('commander');

const loader = require('./lib/loader');

loader.init();

const commands = loader.getCommands();

process.argv[1] = 'ubelt.js';

program
  .version(require('./package.json').version);

for(const command of commands) {
    program
        .command(command.name)
        .on('--help', function() { console.log(command.descr);})
        .action(command.exec);
}

program.parse(process.argv);
