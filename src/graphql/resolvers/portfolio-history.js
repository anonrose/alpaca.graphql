const alpaca = require('../../alpaca')

const portfolio_history = (_, args) => alpaca.getPortfolioHistory(args);

module.exports = {
  queries: {
    portfolio_history
  }
};