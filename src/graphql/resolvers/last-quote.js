const last_quote = (_, args, context) => context.alpaca.getLastQuote(args);

module.exports = {
  queries: {
    last_quote
  }
};