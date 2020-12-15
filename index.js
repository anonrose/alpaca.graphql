const app = require('express')();
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { loadSchema } = require('@graphql-tools/load');
const { addResolversToSchema } = require('@graphql-tools/schema');
let resolvers = require('./src/graphql/resolvers');

dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development' });
(async () => {
  const schema = await loadSchema('./src/graphql/types/*.graphql', { // load from multiple files using glob
    loaders: [
      new GraphQLFileLoader()
    ]
  });

  // Add resolvers to the schema
  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers: {
      Query: {
        ...resolvers
      }
    }
  });

  app.use('/graphql', graphqlHTTP({
    schema: schemaWithResolvers,
    graphiql: true,
  }));

  app.listen(process.env.PORT || 3000, () => {
    console.info('Listening on http://localhost:3000/graphql');
  });
})()
