import { GraphQLClient } from "graphql-request";

let client: GraphQLClient;

export const getGraphQLClient = () => {
    if(client) return client;

    client = new GraphQLClient(process.env.CONTENT_API_ENDPOINT ?? "");
    return client;
}
