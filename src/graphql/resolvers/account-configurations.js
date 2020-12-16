const alpaca = require('../../alpaca')

const account_configurations = _ => alpaca.getAccountConfigurations();
const update_account_configuration = (_, args) => alpaca.updateAccountConfigurations(args);

module.exports = {
  queries: {
    account_configurations
  },
  mutations: {
    update_account_configuration
  }
};