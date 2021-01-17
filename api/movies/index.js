import express from 'express';
import {
   getMovieReviews
} from '../tmdb-api';
import movieModel from './movieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const movie = await movieModel.findBYMovieDBId(id);
  if(!movie) {
    res.status(404).send({message:`Uable to find movie with id: ${id}.` ,status: 404});

  }else{
await movieModel.deleteone({"id":id});
res.status(200).send({message: `Deleted movie id: ${id}. `, status:200});
  }
});

export default router;