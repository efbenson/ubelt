'use strict';

module.exports = { 
    test : {
        folder: 'test/**',
        questions: [
            {
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
        ]
    }, 
    test2 : {
        folder: '/test/**',
        questions: [
            {
                type: 'input',
                name: 'user',
                message: 'user?',
                validate: function (value) {
                    return true;
                }
            }
        ]
    }
};

