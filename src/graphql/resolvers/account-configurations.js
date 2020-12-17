const account_configurations = (_, args, context) => context.alpaca.getAccountConfigurations();
const update_account_configuration = (_, args, context) => context.alpaca.updateAccountConfigurations(args);

module.exports = {
  queries: {
    account_configurations
  },
  mutations: {
    update_account_configuration
  }
};