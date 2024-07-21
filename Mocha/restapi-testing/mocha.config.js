/*module.exports = {
    reporter: 'mochawesome',
    require:['./test/global-setup.mjs']
}*/

module.exports = {
reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: './test-results.xml',
  },
  require:['./test/global-setup.mjs']
}