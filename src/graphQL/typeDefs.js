import { gql } from 'apollo-server';
import Estimation from './estimations/typeDef'


const typeDef = gql`
  type Query {
    estimations: [Estimation]
  }
`;

export default [typeDef,Estimation]