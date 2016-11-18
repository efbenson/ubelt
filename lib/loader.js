'use strict';

const fs = require('fs'),
    path = require('path');

const commandsFolder = path.join(__dirname , './commands/');


const commands = {},
    options = [];

function exec() {
}

function getOptions() {
    for (const key of Object.keys(commands)) {
        for (const option of commands[key].options) {
            options.push(option);
        }
    }
    return options;
}

function getCommands() {
    const configs = [];
    for (const key of Object.keys(commands)) {
        configs.push(commands[key].config());
    }
    return configs;
}

function init() {
    const files = fs.readdirSync(commandsFolder);

    for(const file of files) {
        commands[file] = require(path.join(commandsFolder, file));
    }
}

module.exports = {
    init: init,
    getCommands: getCommands,
    getOptions: getOptions,
    exec: exec
};