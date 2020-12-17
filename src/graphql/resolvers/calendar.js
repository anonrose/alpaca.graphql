const calendar = (_, args, context) => context.alpaca.getCalendar(args);

module.exports = {
  queries: {
    calendar
  }
};