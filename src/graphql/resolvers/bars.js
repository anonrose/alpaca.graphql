const bars = async (_, args, context) => {
  const normalizedBars = [];
  const bars = await context.alpaca.getBars(args)

  for (const symbol in bars)
    normalizedBars.push({ symbol, quotes: bars[symbol] })

  return normalizedBars;
};

module.exports = {
  queries: {
    bars
  }
};