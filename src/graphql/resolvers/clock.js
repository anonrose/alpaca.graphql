const clock = (_, args, context) => context.alpaca.getClock(args)

module.exports = {
  queries: {
    clock
  }
};