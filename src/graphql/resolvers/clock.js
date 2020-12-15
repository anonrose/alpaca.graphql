const alpaca = require('../../alpaca')

const clock = (obj, args, context, info) => alpaca.getClock(args);

module.exports = clock;