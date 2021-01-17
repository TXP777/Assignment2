import express from 'express';
import peopleModel from './peopleModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  peopleModel.find().then(people => res.status(200).send(people)).catch(next);
});
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  peopleModel.findByMovieDBId(id).then(people => res.status(200).send(people)).catch(next);
});
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const people = await peopleModel.findBYMovieDBId(id);
  if(!people) {
    res.status(404).send({message:`Uable to find person with id: ${id}.` ,status: 404});

  }else{
await peopleModel.deleteone({"id":id});
res.status(200).send({message: `Deleted person id: ${id}. `, status:200});
  }
});

export default router;