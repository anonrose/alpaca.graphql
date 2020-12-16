const alpaca = require('../../alpaca')

const asset = (_, args) => alpaca.getAsset(args);
const assets = (_, args) => alpaca.getAssets(args);

module.exports = {
  queries: {
    asset,
    assets
  }
};