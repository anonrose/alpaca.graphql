const alpaca = require('../../alpaca')

const close_position = (_, args) => alpaca.closePosition(args);
const close_all_positions = (_, args) => alpaca.closePositions(args);

module.exports = {
  mutations: {
    close_position,
    close_all_positions
  }
}