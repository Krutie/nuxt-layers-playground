import { createSchema } from 'graphql-yoga'

const typeDefinitions = /* GraphQL */ `
  type Query {
    hello: String!,
  }  
`

const resolvers = {
    Query: {
        hello: () => 'Hello World!'
    }
}

export default createSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
})
