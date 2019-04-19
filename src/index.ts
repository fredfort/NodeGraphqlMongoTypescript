import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers, { Context } from './resolvers/root.resolver';
import { apolloConfig } from './apollo.config';
import { PersonAPI } from './person/person.datasource';

const typeDefs = fs.readFileSync(path.join(__dirname, `schema.graphql`), 'utf8').toString();

// set up any dataSources our resolvers need
const dataSources = () => ({
  personAPI: new PersonAPI(),
});

// the function that sets up the global context for each resolver, using the req
const context: Context = async () => {
  // TODO
};

const server = new ApolloServer({
  typeDefs: [
    gql`
      ${typeDefs}
    `,
    DIRECTIVES,
  ],
  resolvers,
  ...apolloConfig,
  dataSources,
});

const app = express();
server.applyMiddleware({ app });

// Set up default mongoose connection
const mongoDBLink = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDBLink, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${mongoDBLink}`));

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
