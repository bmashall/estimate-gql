import { ApolloServer, gql } from 'apollo-server';
import {resolvers, typeDefs} from './graphQL'
import {connect} from './config'
// import {Estimation} from '../src/models/estimations'

// connect to mongodb 
connect()


// Estimation.create({title: 'task', skills:["shir","bar"], id:"2543"}).then((...args)=>console.log(...args))

const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});