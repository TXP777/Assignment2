import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingModel from '../api/upcoming/upcomingModel';
import topRatedModel from '../api/topRated/topRatedModel';
import peopleModel from '../api/people/peopleModel';
import {movies} from './movies.js';
import {upcoming} from './upcoming.js';
import {topRated} from './topRated.js';
import {people} from './people.js';


import {
  getMovies,getUpcomingMovies,getTopRatedMovies,getPeople
} from '../api/tmdb-api';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }

  // deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    getMovies().then(async movies =>{
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

    
 
export async function loadUpcoming() {
  console.log('load upcoming data');
  console.log(upcoming.length);
  try {
    getUpcomingMovies().then(async upcoming =>{
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} UpcomingMovies were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load upcomingMovie Data: ${err}`);
  }
}
export async function loadTopRated() {
  console.log('load topRated data');
  console.log(topRated.length);
  try {
    getTopRatedMovies().then(async topRated =>{
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(topRated);
    console.info(`${topRated.length} TopRatedMovies were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load topRtaed Data: ${err}`);
  }
}
export async function loadPeople() {
  console.log('load people data');
  console.log(people.length);
  try {
    getPeople().then(async people =>{
    await peopleModel.deleteMany();
    await peopleModel.collection.insertMany(people);
    console.info(`${people.length} people were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load people Data: ${err}`);
  }
}


