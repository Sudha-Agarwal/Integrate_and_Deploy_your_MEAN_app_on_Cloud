module.exports = {
    reporter: 'spec', // Specify the reporter to use ('spec', 'dot', 'nyan', etc.)
    timeout: 10000,   // Set the timeout of each test case to 10 seconds
    ignore: ['ignore/**/*.js'], // Specify files to ignore in testing
    file: ['tests/**/*.js'],    // Specify test files to include

    require: [
        '@babel/register', // Require Babel for ES6+ support
        'chai/register-expect' // Require Chai's expect as an assertion style
    ],

    // Additional configuration options can be added as needed
};
