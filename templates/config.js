'use strict';

module.exports = { 
    test : {
        folder: 'test/**',
        questions: [
            {
                type: 'input',
                name: 'phone',
                message: 'What\'s your phone number?'
            }
        ]
    }, 
    test2 : {
        folder: '/test/**',
        questions: [
            {
                type: 'input',
                name: 'user',
                message: 'user?',
                validate: function () {
                    return true;
                }
            }
        ]
    }
};

