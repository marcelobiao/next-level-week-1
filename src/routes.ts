import express, { response } from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

routes.get('/items', ItemsController.index);

routes.post('/points', PointsController.create);
routes.get('/points/:id', PointsController.show);
routes.get('/points', PointsController.index);

routes.get('/', (req,res) => {
  return res.json('Hello!'); 
});

export default routes;