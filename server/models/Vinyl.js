const mongoose = require('mongoose');

const { Schema } = mongoose;

const vinylSchema = new Schema({
    // Album title
  title: {
    type: String,
    required: true,
    trim: true
    // Artist Name
  },
  artist: {
    type: String,
    required: true,
    trim: true
  },
  // Year when album was released
  releaseYear: {
    type: Number 
  },
  // Image of album
  image: {
    type: String
  },
  // Price of album
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  // Quantity when user add's to cart
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  // The genre of the album
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genre',
    required: true
  }
});

const Vinyl = mongoose.model('Vinyl', vinylSchema);

module.exports = Vinyl;