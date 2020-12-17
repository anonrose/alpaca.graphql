const activities = (_, args, context) => context.alpaca.getAccountActivities(args)

module.exports = {
  queries: {
    activities
  }
};