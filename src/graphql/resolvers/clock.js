const alpaca = require('../../alpaca')

const clock = (_, args) => alpaca.getClock(args);

module.exports = {
  queries: {
    clock
  }
};