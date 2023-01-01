import { getGraphQLClient } from "config/graphql-client";
import { featureQuery } from "query";

export const getProgressData = async () => {
    const graphQLClient = getGraphQLClient();

    try{
        const progressData = await graphQLClient.request(featureQuery);

        return {
            success: true,
            data: progressData.features ? progressData.features : [],
        };
    }
    catch(error){
        if(error instanceof Error){
            return {
                success: false,
                error: error.message,
                data: [],
            }
        }

        return {
            success: false,
            error: "Internal Server Error!!",
            data: [],
        }
    }
};
