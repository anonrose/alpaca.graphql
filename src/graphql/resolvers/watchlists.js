const create_watchlist = (_, args, context) => context.alpaca.createWatchlist(args);
const update_watchlist = (_, args, context) => context.alpaca.updateWatchlist(args);
const delete_watchlist = (_, args, context) => context.alpaca.deleteWatchlist(args);
const add_symbol_to_watchlist = (_, args, context) => context.alpaca.addToWatchlist(args);
const remove_symbol_from_watchlist = (_, args, context) => context.alpaca.removeFromWatchlist(args);
const watchlist = (_, args, context) => context.alpaca.getWatchlist(args)
const watchlists = (_, args, context) => context.alpaca.getWatchlists();

module.exports = {
  queries: {
    watchlist,
    watchlists
  },
  mutations: {
    create_watchlist,
    update_watchlist,
    delete_watchlist,
    add_symbol_to_watchlist,
    remove_symbol_from_watchlist
  }
}