import express from 'express';
import {
  getMovieReviews
} from '../tmdb-api';
import upcomingModel from './upcomingModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  upcomingModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  upcomingModel.findByMovieDBId(id).then(upcoming => res.status(200).send(upcoming)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;