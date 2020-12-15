const alpaca = require('../../alpaca')

const asset = (obj, args, context, info) => alpaca.getAsset(args);

module.exports = asset;