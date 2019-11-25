/**
 * Main application routes
 */

import ping from './api/ping'
import empresa from './api/empresa'
import { Application, Response, Request } from 'express'

const routes = (app: Application): void => {
  app.use('/api/ping', ping)
  app.use('/api/empresa', empresa)

  app.route('/*')
    .get((req: Request, res: Response) => {
      res.sendStatus(404)
    });
};

export default routes
