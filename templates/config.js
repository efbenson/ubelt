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
        ]
    }
};

