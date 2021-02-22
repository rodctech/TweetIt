import './config/db';

//import bodyParser from 'body-parser';
import constants from './config/constants'
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './graphql/resolvers/index';
import typeDefs from './graphql/schema';

//import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';


const app = express(); // create an instance of express

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});


app.use(express.json()); 

schema.applyMiddleware({
    app
});

// app.use(
//     '/graphiql',
//     graphiqlExpress({
//       endpointURL: constants.GRAPHQL_PATH,
//     }),
//   );


//app.use(constants.GRAPHQL_PATH, graphqlExpress({
//    schema
//}))

const graphQLServer = createServer(app);

//const PORT = process.env.PORT || 3000; // create the port

//app.use(bodyParser.json()); // add body-parser as the json parser middleware
//app.use(express.json()); 


graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`\n**** APP LISTENING ON PORT: ${constants.PORT} ****\n`);
  }
});