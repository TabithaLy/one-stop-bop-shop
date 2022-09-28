const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
<<<<<<< HEAD
// const Order = require('./Order');

const userSchema = new Schema({
=======
const Order = require('./Order');

const userSchema = new Schema({
  // Users first name
>>>>>>> 48966a3abebf7f2c4daaacbe3b28311591c54fed
  firstName: {
    type: String,
    required: true,
    trim: true
  },
<<<<<<< HEAD
=======
  // Users last name
>>>>>>> 48966a3abebf7f2c4daaacbe3b28311591c54fed
  lastName: {
    type: String,
    required: true,
    trim: true
  },
<<<<<<< HEAD
=======
  // Users email must be unique
>>>>>>> 48966a3abebf7f2c4daaacbe3b28311591c54fed
  email: {
    type: String,
    required: true,
    unique: true
  },
<<<<<<< HEAD
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  // orders: [Order.schema]
});

// set up pre-save middleware to create password
=======
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
>>>>>>> 48966a3abebf7f2c4daaacbe3b28311591c54fed
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

<<<<<<< HEAD
// compare the incoming password with the hashed password
=======
// Compares incoming password with hashed password
>>>>>>> 48966a3abebf7f2c4daaacbe3b28311591c54fed
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

<<<<<<< HEAD
module.exports = User;
=======
// Export User
module.exports = User;
>>>>>>> 48966a3abebf7f2c4daaacbe3b28311591c54fed
