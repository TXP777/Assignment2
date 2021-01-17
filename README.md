# Assignment 2 - Web API.

Name: Xianping Tao

## Features. 
 + Feature 1 - new API routes, including a parameterised URL.
 + Feature 2 - Mongo integration.
 + Feature 3 - Minimal React integration
 + Feature 4 - Basic authentication
 + Feature 5 - Use expression middleware

## Installation Requirements

git clone https://github.com/TXP777/




## API Configuration

NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=8c27a1cd1d0cec214a5dc2eedcd8a0e1
mongoDB=mongodb+srv://admin:12345@cluster0.mm5gs.mongodb.net/test?retryWrites=true&w=majority
SEED_DB=true
SECRET=ilikecake


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/upcoming | Gets a list of movies | N/A | N/A | delete movies by id
| /api/topRated |Gets a list of movies | N/A | N/A | N/A
| /api/people |Gets a list of people | N/A | N/A | Delete people by id
| /api/users |Gets a list of users | Create a new user | N/A | N/A
| /api/genres |Gets a list of genres | N/A | N/A | N/A


If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions).

import passport from 'passport';
import passportJWT from 'passport-jwt';
import UserModel from './../api/users/userModel';
import dotenv from 'dotenv';

dotenv.config();

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET;
const strategy = new JWTStrategy(jwtOptions, async (payload, next) => {
  const user = await UserModel.findByUserName(payload);
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});
passport.use(strategy);

export default passport;



app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);






 Indicate which routes are protected.


## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 
  export const getUpcomingMovies = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      },
      method:'get',
    }
    ).then(res => res.json());
  };
  //export const getTopRatedMovies = id => {
  //  return fetch(
  //    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //  )
  //    .then(res => res.json())
  //    .then(json => json.results);
  //};
  export const getTopRatedMovies = id => {
    return fetch(
      '/api/topRated',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
  //export const getPeople = () => {
  //  return fetch(
  //    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  //  )
  //    .then(res => res.json())
  //    .then(json => json.results);
  //};
  export const getPeople = () => {
    return fetch(
      '/api/people',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
  //export const getPerson = id => {
  //  return fetch(
  //    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  //  ).then(res => res.json());
  //};
  export const getPerson = id => {
    return fetch(
      '/api/person',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  



# Assignment 2 - Agile Software Practice.

Name: Xianping Tao

## Target Web API.

...... Document the Web API that is the target for this assignment's CI/CD pipeline. Include the API's endpoints and any other features relevant to the creation of a suitable pipeline, e.g.

+ Get /api/movies - returns an array of movie objects.
+ Get /api/movies/:id - returns detailed information on a specific movie.
+ Get /api/movies/:id/reviews - returns reviews of detailed information on a specific movie.
+ Get /api/upcoming - returns an array of movie objects.
+ Get /api/upcoming/:id - returns detailed information on a specific movie.
+ Get /api/upcoming/:id/reviews - returns reviews of detailed information on a specific movie.
+ Get /api/topRated - returns an array of movie objects.
+ Get /api/topRated/:id - returns detailed information on a specific movie.
+ Get /api/topRated/:id/reviews - returns reviews of detailed information on a specific movie.
+ Get /api/people - returns an array of people objects.
+ Get /api/people/:id - returns detailed information on a specific person.
+ Delete /api/people/:id - delete a specific person.
+ Get /api/users - returns two users.
+ Post /api/users - add a new user to the database.
+ Get /api/genres - returns an array of genre objects.

## Error/Exception Testing.

+ Get /api/users - test users account list
+ Post /api/users - test registration of new users
+ Get /api/movies - test movies list when the token is valid and invalid.
+ Get /api/movies - test movies list when the id is valid and invalid.
+ Delete /api/movies - Test to delete a specific movie.
+ Get /api/upcoming - test movies list when the id is valid and invalid.
+ Delete /api/upcoming - Test to delete a specific movie.



## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ https://movies-api-staging02.herokuapp.com/ - Staging deployment
+ https://movies-api-deploy.herokuapp.com/ - Production



.... Show a screenshots from the overview page for the two Heroku apps e,g,

+ Staging app overview 

![][movie-api-staging]
![][movie-api-deploy]

+ Production app overview 

[ , , , screenshot here . . . ]

[If an alternative platform to Heroku was used then show the relevant page from that platform's UI.]


[movie-api-staging]: ./img/movies-api-staging.png
[]