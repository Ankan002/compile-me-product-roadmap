import { gql } from "graphql-request";

export const featureQuery = gql`
    query Features {
        features(orderBy: rank_ASC) {
            id
            description
            rank
            title
            completion_status
        }
    }
`;
