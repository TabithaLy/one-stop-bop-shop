const mongoose = require('mongoose');

const { Schema } = mongoose;

// Genre 
const categorySchema = new Schema({
    // Name of Genre
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;