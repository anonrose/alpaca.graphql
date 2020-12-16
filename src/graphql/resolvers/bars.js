const alpaca = require('../../alpaca')

const bars = async (_, args) => {
  const normalizedBars = [];
  const bars = await alpaca.getBars(args)

  for (const symbol in bars)
    normalizedBars.push({ symbol, quotes: bars[symbol] })

  return normalizedBars;
};

module.exports = {
  queries: {
    bars
  }
};