const orders = (_, args, context) => context.alpaca.getOrders(args);
const order = (_, args, context) => context.alpaca.getOrder(args);
const request_order = (_, args, context) => context.alpaca.placeOrder(args);
const replace_order = (_, args, context) => context.alpaca.replaceOrder(args);
const cancel_order = (_, args, context) => context.alpaca.cancelOrder(args);
const cancel_all_orders = (_, args, context) => context.alpaca.cancelOrders(args);

module.exports = {
  queries: {
    orders,
    order
  },
  mutations: {
    request_order,
    replace_order,
    cancel_order,
    cancel_all_orders
  }
}