import express from 'express';
import fs from 'fs';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers/root.resolver';
import { apolloConfig } from './config/apollo.config';

const typeDefs = fs.readFileSync(`./schema.graphql`, 'utf8').toString();

const server = new ApolloServer({
  typeDefs: gql`${typeDefs}`,
  resolvers,
  ...apolloConfig,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
