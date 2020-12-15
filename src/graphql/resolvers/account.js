const alpaca = require('../../alpaca')

const account = (obj, args, context, info) => alpaca.getAccount(args);

module.exports = account;