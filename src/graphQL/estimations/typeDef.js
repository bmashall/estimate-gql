import { gql } from 'apollo-server';

const estimationTypeDefs = gql`
  type Estimation {
    title: String
    id: ID
    skills: [String]
  }
  
  type Skill {
    id: String
    title: String
  }`

  export default estimationTypeDefs