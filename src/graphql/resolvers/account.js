const alpaca = require('../../alpaca')

const account = (_, args) => alpaca.getAccount(args);

module.exports = {
  queries: {
    account
  }
};