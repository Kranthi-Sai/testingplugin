import { verifyConditions, success } from './google-sheets-plugin.js';

const pluginConfig = {
  googleSheetUrl: 'https://script.google.com/macros/s/AKfycby9ysDX76yWl4xH0ORvtCwNOj1gDy_P4rWixWCG4wQ/dev',
  type: 'production'
};

const context = {
  logger: console,
  nextRelease: {
    version: '1.0.0',
    name: 'production'
  }
};

// Run verifyConditions to check if the URL is provided
try {
  verifyConditions(pluginConfig, context);
  console.log('verifyConditions passed.');
} catch (error) {
  console.error('verifyConditions failed:', error.message);
}

// Run success to simulate posting to Google Sheets
success(pluginConfig, context);
