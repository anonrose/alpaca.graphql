const alpaca = require('../../alpaca')

const last_quote = (_, args) => alpaca.getLastQuote(args);

module.exports = {
  queries: {
    last_quote
  }
};