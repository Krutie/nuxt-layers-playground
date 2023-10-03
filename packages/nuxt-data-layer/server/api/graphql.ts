import { createYoga } from "graphql-yoga"
import schema from '../../graphql'

export default defineEventHandler(async (event) => {

    const yoga = createYoga({ schema, graphqlEndpoint: '/api/graphql' })

    const { req, res } = event.node

    return yoga(req, res)
})