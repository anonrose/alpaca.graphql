const { AlpacaClient } = require('@master-chief/alpaca');
const client = new AlpacaClient({
  credentials: {
    key: process.env.ALPACA_API_KEY,
    secret: process.env.ALPACA_API_SECRET
  },
  rate_limit: true
})

module.exports = client;