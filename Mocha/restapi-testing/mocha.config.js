module.exports = {
    reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './mochawesome-report', // Directory where the report will be generated
    reportFilename: 'results', // Name of the report file
    inlineAssets: true, // Include assets in the report
  },
    require:['./test/global-setup.mjs']
}

