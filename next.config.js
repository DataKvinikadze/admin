// next.config.js
const { loadConfig } = require('ts-node');
require('ts-node').register();

module.exports = require('./next.config.ts').default;
