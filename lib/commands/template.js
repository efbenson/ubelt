'use strict';

const BbPromise = require('bluebird'), 
    conflict = require('gulp-conflict'),
    gulp = require('gulp'),
    inquirer = require('inquirer'),
    install = require('gulp-install'),
    path = require('path'),
    rename = require('gulp-rename'),
    template = require('gulp-template');

const templateConfig = require('../../templates/config');


function getTemplateNames() {
    const names = Object.keys(templateConfig);
    return names;
}

const questions =  [
    {
        type: 'confirm',
        name: 'correctLocation',
        message: '',
        default: false
    },
    {
        when: function (response) {
            return response.correctLocation;
        },
        type: 'list',
        name: 'template',
        message: 'What template do you want to run?',
        choices: getTemplateNames()
    }
];

function getConfig(dir) {
    questions[0].message = 'Copy results to: ' + path.resolve(process.cwd() + '/' + (dir || ''));
    return inquirer.prompt(questions)
        .then(function(answers) {
            if (!answers.correctLocation){
                process.exit();
            }
            if (!answers.template) {
                return BbPromise.reject({exitMessage: 'invalid template'});
            }
            return inquirer.prompt(templateConfig[answers.template].questions)
                .then(function(results) {
                    return {type: answers.template, config: results};
                });
        });
}

function buildTemplate(dir, tempName, answers) {
    return new BbPromise(function(resolve, reject) {
        const custRename = templateConfig[tempName].rename || function() {};
        gulp.src(path.resolve(__dirname + '/', '../../templates/') + templateConfig[tempName].folder)
            .pipe(template(answers))
            .pipe(rename(custRename.bind(null, answers)))
            .pipe(conflict(dir || './'))
            .pipe(gulp.dest(dir || './'))
            .pipe(install())
            .on('error', function(err) {
                return reject(err);
            })            
            .on('end', function() {
                return resolve();
            });
    });
}

function exec(dir) {
    getConfig(dir)
        .then(function(answer) {
            return buildTemplate(dir, answer.type, answer);
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
