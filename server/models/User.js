const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  // Users first name
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  // Users last name
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  // Users email must be unique
  email: {
    type: String,
    required: true,
    unique: true
  },
  // Users password
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  // A user can have one or more orders
  orders: [Order.schema]
});

// Pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Compares incoming password with hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

// Export User
module.exports = User;