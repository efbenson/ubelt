'use strict';

module.exports = { 
    blankModule : {
        folder: '/blankModule/**',
        questions: [
            {
                type: 'input',
                name: 'name',
                message: 'Name of the module?'
            },
            {
                type: 'input',
                name: 'relativePath',
                message: 'Relative path of the module from the base project (include trailing slash)?'
            }
        ],
        rename: function(answers, file) {
            if (file.basename === 'index') {
                file.basename = answers.config.name;
            }
            if (file.basename === 'index_spec') {
                file.basename = answers.config.name + '_spec';
            }
        }
    }
};

