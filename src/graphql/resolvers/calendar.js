const alpaca = require('../../alpaca')

const calendar = (obj, args, context, info) => alpaca.getCalendar(args);

module.exports = calendar;