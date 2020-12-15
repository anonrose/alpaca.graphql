const alpaca = require('../../alpaca')

const activities = async (obj, args, context, info) => alpaca.getAccountActivities(args)

module.exports = activities;