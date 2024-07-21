module.exports = {
    reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './mochawesome-report', // Directory where the report will be generated
    reportFilename: 'results', // Name of the report file
    inlineAssets: true, // Include assets in the report
  },
    require:['./test/global-setup.mjs']
}

/*
module.exports = {
reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: './test-results.xml',
  },
  require:['./test/global-setup.mjs']
}*/