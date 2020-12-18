const close_position = (_, args, context) => context.alpaca.closePosition(args);
const close_all_positions = (_, args, context) => context.alpaca.closePositions(args);
const positions = (_, args, context) => context.alpaca.getPositions(args);
const position = (_, args, context) => context.alpaca.getPosition(args);

module.exports = {
  queries: {
    positions,
    position
  },
  mutations: {
    close_position,
    close_all_positions
  }
}