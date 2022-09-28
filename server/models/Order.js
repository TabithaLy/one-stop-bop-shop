const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    // Date when order was purchased
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  // Order can contain one or more products
  vinyl: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vinyl'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;