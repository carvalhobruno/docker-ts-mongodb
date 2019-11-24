/**
 * Main application routes
 */

import ping from './api/ping'
import empresa from './api/empresa'
import * as express from 'express'

const routes = (app: express.Application): void => {
  app.use('/api/ping', ping)
  app.use('/api/empresa', empresa)

  app.route('/*')
    .get((req: express.Request, res: express.Response) => {
      res.sendStatus(404)
    });
};

export default routes
