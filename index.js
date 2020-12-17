const app = require('express')();
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { loadSchema } = require('@graphql-tools/load');
const { addResolversToSchema } = require('@graphql-tools/schema');
const resolvers = require('./src/graphql/resolvers');
const { AlpacaClient } = require('@master-chief/alpaca');
const PORT = process.env.PORT || 3000;

dotenv.config();

const key = process.env.ALPACA_CLIENT_ID, secret = process.env.ALPACA_CLIENT_SECRET;


(async () => {
  const schema = await loadSchema('./src/graphql/types/*.graphql', { // load from multiple files using glob
    loaders: [
      new GraphQLFileLoader()
    ]
  });

  // Add resolvers to the schema
  const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

  app.use('/graphql', (req, res, next) => {
    const bearerHeader = req.header('Authorization');
    if (bearerHeader) {
      const [_, access_token] = bearerHeader.split(' ');
      req.alpaca = new AlpacaClient({ credentials: { access_token } });
    } else if (key && secret) {
      req.alpaca = new AlpacaClient({ credentials: { key, secret } });
    } else {
      return res.sendStatus(403);
    }
    next();
  });

  app.use('/graphql', graphqlHTTP({
    schema: schemaWithResolvers,
    graphiql: !!process.env.SHOW_GRAPHIQL
  }));


  app.listen(PORT, () => {
    console.info(`Listening on ${PORT}`);
  });
})()
