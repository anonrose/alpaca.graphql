const account = (_, args, context) => context.alpaca.getAccount(args);

module.exports = {
  queries: {
    account
  }
};