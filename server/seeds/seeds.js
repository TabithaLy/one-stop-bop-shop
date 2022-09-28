const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  // Deletes Categories if they exist
    await Category.deleteMany();
  
    // Create Categories/Genres
    const categories = await Category.insertMany([
      { name: 'Rock' },
      { name: 'Pop' },
      { name: 'Jazz' },
      { name: 'Hip-Hop' },
      { name: 'Blues' }
    ]);

    console.log('Genres successfully seeded');

    // Deletes Products if they exist
    await Product.deleteMany();

    // Create Products
    const products = await Product.insertMany([
        {
          title: 'Channel Orange',
          artist: 'Frank Ocean', 
          releaseYear: 2012,
          image: 'channel-orange.png',
          price: 24.99,
          quantity: 500,
          category: categories[4]._id
        },
        {
          title: 'Blonde',
          artist: 'Frank Ocean', 
          releaseYear: 2016,
          image: 'blonde.png',
          price: 24.99,
          quantity: 500,
          category: categories[4]._id
        },
        {
          title: 'Nostalgia, Ultra',
          artist: 'Frank Ocean', 
          releaseYear: 2011,
          image: 'nostalgia-ultra.png',
          price: 24.99,
          quantity: 500,
          category: categories[4]._id
        },
      ]);

      console.log('Products successfully seeded');

      // Deletes Users if they exit
      await User.deleteMany();

      // Creates Users
      await User.create({
        firstName: 'Nate',
        lastName: 'Diggity',
        email: 'natediggity@gmail.com',
        password: 'superdiggitydawg123',
        orders: [
          {
            products: [products[0]._id, products[0]._id, products[1]._id]
          }
        ]
      });
});