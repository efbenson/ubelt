'use strict';

const BbPromise = require('bluebird'), 
    util = require('util'),
    inquirer = require('inquirer');

const templateConfig = require('../../templates/config');


function getTemplateNames() {
    const names = Object.keys(templateConfig.config);
    return names;
}

const questions =  [
    {
        type: 'list',
        name: 'template',
        message: 'What template do you want to run?',
        choices: getTemplateNames(),
        filter: function (val) {
            return val.toLowerCase();
        }
    }
];

function getConfig() {
    return inquirer.prompt(questions)
        .then(function(type) {
            if (!type) {
                return BbPromise.reject(new Error('invalid template'));
            }

            return inquirer.prompt(templateConfig.config[type.template].questions)
                .then(function(results) {
                    return {type: type, config: results};
                });
        });
}

function buildTemplate(dir, template, conf) {
        throw new Error('test');
            // http://thejackalofjavascript.com/building-slush-generator/
            // gulp.src(__dirname + '/templates/**')
            //     .pipe(template(answers))
            //     .pipe(rename(function(file) {
            //         if (file.basename[0] === '_') {
            //             file.basename = '.' + file.basename.slice(1);
            //         }
            //     }))
            //     .pipe(conflict('./'))
            //     .pipe(gulp.dest('./'))
            //     .pipe(install())
            //     .on('end', function() {
            //         done();
            //     });
}

function exec(dir) {
    getConfig()
        .then(function(answer) {
            return buildTemplate(dir, answer.template, answer.config);
        })
        .catch(function(err) {
            console.log(err.message);
            console.log(err.stack);
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
