'use strict';

const BbPromise = require('bluebird');

let config; 

/**
 * Inits the <%= config.name %> module
 * @param  {Object} _config_ the config
 * @param  {Object} depInj inject dependancies for testing 
 * 
 * @returns {Promise} resolves the results of startup
 */
function init(_config_) {
    config =_config_;
    if (!config) { return BbPromise.reject(new Error('<%= config.relativePath %><%= config.name %>: missing config'));}

    return BbPromise.resolve();
}

module.exports = {
    init: init
};
