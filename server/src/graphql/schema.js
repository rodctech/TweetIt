import { gql } from 'apollo-server-express';

export default gql`
    type Tweet {
        _id: String,
        text: String
    }

    type Query {
        getTweets: [Tweet]
    }

    schema{
        query: Query
    }

`;

// export const Query = gql`
//      extend type Query {
//         getTweets: [Tweet]
//     }
// `;