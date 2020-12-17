const asset = (_, args, context) => context.alpaca.getAsset(args);
const assets = (_, args, context) => context.alpaca.getAssets(args);

module.exports = {
  queries: {
    asset,
    assets
  }
};