const mongoose = require(`../db/connection`)

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    unwatchedMovies: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie"}],
    // watchedMovies: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Movie"
    // }],
    googleId: String
  }, {
    timestamps: true
  });

const User = mongoose.model("User", UserSchema)

module.exports = User

