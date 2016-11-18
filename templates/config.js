'use strict';

const config = { 
    test : {
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
        questions: [
            {
                type: 'input',
                name: 'Test2Question',
                message: 'Test2Question?',
                validate: function (value) {
                    return true;
                }
            }
        ]
    }
};

module.exports = {
    config: config
};
