const { AuthenticationError } = require('apollo-server-express');
const { User, Genre, Order, Vinyl } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_51LoYXUIP0IqlLShQhOqULy7BvMvgkPH3IbIwQonAZduXpFl7QEOTxAT2hkikEF4IF4jYmPVmKWjvuaQDKpFXcpxj00qTWIlvsZ');

const resolvers = {
  Query: {
    genres: async () => {
      return await Genre.find();
    },
    vinyls: async (parent, { genre, name, search }) => {
      let params = {};

      if (genre) {
        params.genres = genre;
      }

      if (name) {
        params.title = {
          $regex: name
        };
      }

      if (search) {
        params = {$or:[{artist:{$regex: search, $options: 'i'}},
        {title:{$regex: search, $options: 'i'}}]}
      }

      return await Vinyl.find(params).populate('genres');
    },
    vinyl: async (parent, { _id }) => {
      return await Vinyl.findById(_id).populate('genres');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.vinyls',
          populate: 'genres'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.vinyls',
          populate: 'genres'
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      //const imgurl = new URL("https://res.cloudinary.com/daheygjio/image/upload/v1664415401/albumcovers/")
      const order = new Order({ vinyls: args.vinyls });
      const line_items = [];
      const { vinyls } = await order.populate('vinyls');
      for (let i = 0; i < vinyls.length; i++) {
        
        const vinyl = await stripe.products.create({
          name: vinyls[i].title,
          description: vinyls[i].artist,
          //images: [`${url}${vinyls[i].image}`]
        });

        const price = await stripe.prices.create({
          product: vinyl.id,
          unit_amount: vinyls[i].price * 100,
          currency: 'usd',
        });
        console.log('price is',price)
        line_items.push({
          price: price.id,
          quantity: 1
        });
      }
      console.log('line', line_items)
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { vinyls }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ vinyls });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateVinyl: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Vinyl.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
