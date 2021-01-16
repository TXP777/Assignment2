import express from 'express';
import {
   getPeople
} from '../tmdb-api';
import peopleModel from './peopleModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  peopleModel.find().then(people => res.status(200).send(people)).catch(next);
});

export default router;