const alpaca = require('../../alpaca')

const calendar = (_, args) => alpaca.getCalendar(args);

module.exports = {
  queries: {
    calendar
  }
};