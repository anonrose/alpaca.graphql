const close_position = (_, args, context) => context.alpaca.closePosition(args);
const close_all_positions = (_, args, context) => context.alpaca.closePositions(args);

module.exports = {
  mutations: {
    close_position,
    close_all_positions
  }
}