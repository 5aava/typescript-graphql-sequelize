import express from 'express';
import * as bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';

import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import schema from './schema';

import config from './config/config.server';
import { db } from './database/sequelize';


const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: { db },
});

app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/ping', (req, res) => {
  res.json({ status: 'pong' });
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
httpServer.listen({ port: config.server.port },
  (): void => console.log(`\n🚀 Server is running on http://localhost:${config.server.port}`)
);

export default app;
