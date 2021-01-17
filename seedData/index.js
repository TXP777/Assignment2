import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingModel from '../api/upcoming/upcomingModel';
import topRatedModel from '../api/topRated/topRatedModel';
import peopleModel from '../api/people/peopleModel';
import {getMovies,getUpcomingMovies,getTopRatedMovies,getPeople} from '../api/tmdb-api.js'

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
  try {
    getMovies().then(async res =>{
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(res);
    console.info(`${res.length} Movies were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

    
 
export async function loadUpcoming() {
  console.log('load upcoming data');
  try {
    getUpcomingMovies().then(async res =>{
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(res);
    console.info(`${res.length} UpcomingMovies were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load upcomingMovie Data: ${err}`);
  }
}
export async function loadTopRated() {
  console.log('load topRated data');
  try {
    getTopRatedMovies().then(async res =>{
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(res);
    console.info(`${res.length} TopRatedMovies were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load topRtaed Data: ${err}`);
  }
}
export async function loadPeople() {
  console.log('load people data');
  try {
    getPeople().then(async res =>{
    await peopleModel.deleteMany();
    await peopleModel.collection.insertMany(res);
    console.info(`${res.length} people were successfully stored.`);
    });
  } catch (err) {
    console.error(`failed to Load people Data: ${err}`);
  }
}


