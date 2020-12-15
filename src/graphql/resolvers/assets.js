const alpaca = require('../../alpaca')

const assets = (obj, args, context, info) => alpaca.getAssets(args);

module.exports = assets;