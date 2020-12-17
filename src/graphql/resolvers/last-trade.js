const last_trade = (_, args, context) => context.alpaca.getLastTrade(args);

module.exports = {
  queries: {
    last_trade
  }
};