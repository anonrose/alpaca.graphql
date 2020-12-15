const alpaca = require('../../alpaca')

const asset = async (obj, args, context, info) => {
  const normalizedBars = [];
  const bars = await alpaca.getBars(args)

  for (const symbol in bars)
    normalizedBars.push({ symbol, quotes: bars[symbol] })

  return normalizedBars;
};

module.exports = asset;