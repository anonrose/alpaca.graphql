const portfolio_history = (_, args, context) => context.alpaca.getPortfolioHistory(args);

module.exports = {
  queries: {
    portfolio_history
  }
};