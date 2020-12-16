const alpaca = require('../../alpaca')

const last_trade = (_, args) => alpaca.getLastTrade(args);

module.exports = {
  queries: {
    last_trade
  }
};