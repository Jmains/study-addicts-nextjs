import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_FAUNADB_GRAPHQL_ENDPOINT;

export const graphQLClient = (token) => {
  const secret = token || process.env.NEXT_PUBLIC_BOOTSTRAP_FAUNADB_KEY;

  return new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${secret}`,
    },
  });
};
