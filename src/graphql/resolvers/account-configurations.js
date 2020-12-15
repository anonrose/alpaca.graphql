const alpaca = require('../../alpaca')

const account_configurations = (obj, args, context, info) => alpaca.getAccountConfigurations();

module.exports = account_configurations;