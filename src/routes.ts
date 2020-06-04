import express, { response } from 'express';
import knex from './database/connection';

import PointsController from './controllers/PointsController';

const routes = express.Router();

routes.get('/items', async (req, res) =>{
  const items = await knex('items').select('*');
 
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      name: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`
    }
  })

  return res.json(serializedItems);
})

routes.post('/points', PointsController.create);


routes.get('/', (req,res) => {
  return res.json('Hello!'); 
});

export default routes;