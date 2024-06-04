module.exports = {
    branches: ['main'],
    plugins: [
      './google-sheets-plugin.js',
      {
        googleSheetUrl: 'https://script.google.com/macros/s/AKfycby9ysDX76yWl4xH0ORvtCwNOj1gDy_P4rWixWCG4wQ/dev',
        type: 'production'
      }
    ]
  };
  