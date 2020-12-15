const alpaca = require('../../alpaca')

const last_trade = (obj, args, context, info) => alpaca.getLastTrade(args);

module.exports = last_trade;