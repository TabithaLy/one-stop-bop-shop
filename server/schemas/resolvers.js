const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // genre: async () => {
    //   return await Genre.find();
    // },
    // vinyls: async (parent, { genre, name }) => {
    //   const params = {};

    //   if (genre) {
    //     params.genre = genre;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name
    //     };
    //   }

    //   return await Vinyl.find(params).populate('genre');
    // },
    // vinyl: async (parent, { _id }) => {
    //   return await Vinyl.findById(_id).populate('genre');
    // },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.vinyls',
          populate: 'genre'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    // order: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: 'orders.vinyls',
    //       populate: 'genre'
    //     });

    //     return user.orders.id(_id);
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },
    // checkout: async (parent, args, context) => {
    //   const url = new URL(context.headers.referer).origin;
    //   const order = new Order({ vinyls: args.vinyls });
    //   const line_items = [];

    //   const { vinyls } = await order.populate('vinyls');

    //   for (let i = 0; i < vinyls.length; i++) {
    //     const vinyl = await stripe.vinyls.create({
    //       name: vinyls[i].name,
    //       description: vinyls[i].description,
    //       images: [`${url}/images/${vinyls[i].image}`]
    //     });

    //     const price = await stripe.prices.create({
    //       vinyl: vinyl.id,
    //       unit_amount: vinyls[i].price * 100,
    //       currency: 'usd',
    //     });

    //     line_items.push({
    //       price: price.id,
    //       quantity: 1
    //     });
    //   }

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ['card'],
    //     line_items,
    //     mode: 'payment',
    //     success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${url}/`
    //   });

    //   return { session: session.id };
    // }
  },
  // Mutation: {
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
  //   addOrder: async (parent, { vinyls }, context) => {
  //     console.log(context);
  //     if (context.user) {
  //       const order = new Order({ vinyls });

  //       await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

  //       return order;
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
  //   updateUser: async (parent, args, context) => {
  //     if (context.user) {
  //       return await User.findByIdAndUpdate(context.user._id, args, { new: true });
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
  //   updateVinyl: async (parent, { _id, quantity }) => {
  //     const decrement = Math.abs(quantity) * -1;

  //     return await Vinyl.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
  //   },
  //   login: async (parent, { email, password }) => {
  //     const user = await User.findOne({ email });

  //     if (!user) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const token = signToken(user);

  //     return { token, user };
  //   }
  // }
};

module.exports = resolvers;
