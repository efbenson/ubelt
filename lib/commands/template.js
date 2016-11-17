'use strict';

const util = require('util'),
    inquirer = require('inquirer');

const questions =  [
    {
        type: 'confirm',
        name: 'toBeDelivered',
        message: 'Is this for delivery?',
        default: false
    }, {
        type: 'input',
        name: 'phone',
        message: 'What\'s your phone number?',
        validate: function (value) {
            const pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
            if (pass) {
                return true;
            }

            return 'Please enter a valid phone number';
        }
    }
];

function getConfig() {
    return inquirer.prompt(questions)
}


function exec(dir) {
    getConfig()
        .then(function(config) {
            console.dir(config);
        });
}


function config() {
    return {
        name: 'template [path]',
        descr: 'My description of a template generator, if path is supplied it will be the location of generation',
        exec: exec
    };
}

function init() {

}

module.exports = {
    init: init,
    config: config
};
