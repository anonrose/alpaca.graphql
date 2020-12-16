const alpaca = require('../../alpaca')

const orders = (_, args) => alpaca.getOrders(args);
const order = (_, args) => alpaca.getOrder(args);
const request_order = (_, args) => alpaca.placeOrder(args);
const replace_order = (_, args) => alpaca.replaceOrder(args);
const cancel_order = (_, args) => alpaca.cancelOrder(args);
const cancel_all_orders = (_, args) => alpaca.cancelOrders(args);

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