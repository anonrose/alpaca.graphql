const alpaca = require('../../alpaca')

const activities = async (_, args) => alpaca.getAccountActivities(args)

module.exports = {
  queries: {
    activities
  }
};