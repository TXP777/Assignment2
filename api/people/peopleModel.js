import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PeopleSchema = new Schema({
  genre_ids:[{type:Number}],
  _id:{type:String},
  adult: { type: Boolean },
  gender:{type:Number},
  id: { type: Number, required: true, unique: true },
  known_for: [{
      adult: { type: Boolean },
      backdrop_path: { type: String },
      genre_ids: [{ type: Number }],
      id: { type: Number},
      media_type: { type: String },
      original_language: { type: String },
      original_title: { type: String },
      overview: { type: String },
      poster_path: { type: String },
      release_date: { type: String },
      title: { type: String },
      video: { type: Boolean },
      vote_average: { type: Number },
      vote_count: { type: Number },
  }
  
  ],
  known_for_department:{type:String},
  name:{type:String},
  popularity:{type:Number},
  profile_path:{type:String},
  production_countries: [{
    iso_3166_1: { type: String },
    name: { type: String }
  }],
  runtime: { type: Number },
  spoken_languages: [{
    iso_639_1: { type: String },
    name: { type: String }
  }],
});

PeopleSchema.statics.findByMovieDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('People', PeopleSchema);