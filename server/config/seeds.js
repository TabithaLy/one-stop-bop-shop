const db = require("./connection");
const { User, Vinyl, Genre } = require("../models");

db.once("open", async () => {
  await Genre.deleteMany();

  const genre = await Genre.insertMany([
    { name: "R&B" },
    { name: "Rock" },
    { name: "Jazz" },
    { name: "Blues" },
    { name: "Pop" },
  ]);

  console.log("Genres successfully seeded");

  await Vinyl.deleteMany();

  const vinyl = await Vinyl.insertMany([
    {
      title: "Channel Orange",
      artist: "Frank Ocean",
      releaseYear: 2012,
      image: "channel-orange.png",
      price: 24.99,
      quantity: 500,
      genre: genre[4]._id,
    },
    {
      title: "Blond",
      artist: "Frank Ocean",
      releaseYear: 2016,
      image: "blond.png",
      price: 29.99,
      quantity: 500,
      genre: genre[4]._id,
    },
    {
      title: "Nostalgia Ultra",
      artist: "Frank Ocean",
      releaseYear: 2011,
      image: "nostalgia-ultra.png",
      price: 2.99,
      quantity: 500,
      genre: genre[4]._id,
    },
  ]);

  console.log("Vinyls seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Nate",
    lastName: "Diggity",
    email: "natediggity@testingmail.com",
    password: "passwordtest1",
    orders: [
      {
        vinyl: [vinyl[0]._id, vinyl[0]._id, vinyl[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Test",
    lastName: "User",
    email: "testuser@testingmail.com",
    password: "passwordtest1",
  });

  console.log("Users successfully seeded");

  process.exit();
});
