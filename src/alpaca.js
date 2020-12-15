const { AlpacaClient } = require('@master-chief/alpaca');
const client = new AlpacaClient({
  credentials: {
    key: '',
    secret: ''
  },
  rate_limit: true
})

module.exports = client;