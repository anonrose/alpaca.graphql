const alpaca = require('../../alpaca')

const last_quote = (obj, args, context, info) => alpaca.getLastQuote(args);

module.exports = last_quote;