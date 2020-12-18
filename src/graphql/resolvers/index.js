const account = require('./account');
const account_configurations = require('./account-configurations');
const activities = require('./activities');
const asset = require('./asset');
const calendar = require('./calendar');
const clock = require('./clock');
const portfolio_history = require('./portfolio-history');
const bars = require('./bars');
const last_quote = require('./last-quote');
const last_trade = require('./last-trade');
const orders = require('./orders');
const watchlists = require('./watchlists');
const positions = require('./positions');

module.exports = {
  Query: {
    ...account.queries,
    ...account_configurations.queries,
    ...activities.queries,
    ...asset.queries,
    ...calendar.queries,
    ...clock.queries,
    ...portfolio_history.queries,
    ...bars.queries,
    ...last_quote.queries,
    ...last_trade.queries,
    ...orders.queries,
    ...watchlists.queries,
    ...positions.queries
  },
  Mutation: {
    ...orders.mutations,
    ...watchlists.mutations,
    ...positions.mutations
  }
}
