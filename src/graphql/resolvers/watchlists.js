const alpaca = require('../../alpaca')

const create_watchlist = (_, args) => alpaca.createWatchlist(args);
const update_watchlist = (_, args) => alpaca.updateWatchlist(args);
const delete_watchlist = (_, args) => alpaca.deleteWatchlist(args);
const add_symbol_to_watchlist = (_, args) => alpaca.addToWatchlist(args);
const remove_symbol_from_watchlist = (_, args) => alpaca.removeFromWatchlist(args);
const watchlist = (_, args) => alpaca.getWatchlist(args)
const watchlists = (_, args) => alpaca.getWatchlists();

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