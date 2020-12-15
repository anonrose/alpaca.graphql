const alpaca = require('../../alpaca')

const portfolio_history = (obj, args, context, info) => alpaca.getPortfolioHistory(args);

module.exports = portfolio_history;