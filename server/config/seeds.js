const db = require("./connection");
const { User, Vinyl, Genre } = require("../models");

db.once("open", async () => {
  await Genre.deleteMany();

  const genre = await Genre.insertMany([
    { name: "Funk / Soul" },
    { name: "Rock" },
    { name: "Jazz" },
    { name: "Blues" },
    { name: "Pop" },
    {name: "Country / Folk"},
    {name: "Reggae"},
    {name: "Classical"},
    {name: "Stage & Screen"},
    {name: "Hip Hop"},
    {name: "Electronic"},
    {name: "Latin"}
  ]);

  console.log("Genres successfully seeded");

  await Vinyl.deleteMany();

  const vinyl = await Vinyl.insertMany([
    {
      releaseYear: 1967,
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      artist: 'The Beatles',
      genres: [ genre[1]._id ],
      image: '1.jpg',
      price: 28.99
    },
    {
      releaseYear: 1966,
      title: 'Pet Sounds',
      artist: 'The Beach Boys',
      genres: [ genre[1]._id ],
      image: '2.jpg',
      price: 27.99
    },
    {
      releaseYear: 1966,
      title: 'Revolver',
      artist: 'The Beatles',
      genres: [ genre[1]._id ],
      image: '3.jpg',
      price: 34.99
    },
    {
      releaseYear: 1965,
      title: 'Highway 61 Revisited',
      artist: 'Bob Dylan',
      genres: [ genre[1]._id ],
      image: '4.jpg',
      price: 24.99
    },
    {
      releaseYear: 1965,
      title: 'Rubber Soul',
      artist: 'The Beatles',
      genres: [ genre[1]._id, genre[4]._id ],
      image: '5.jpg',
      price: 20.99
    },
    {
      releaseYear: 1971,
      title: "What's Going On",
      artist: 'Marvin Gaye',
      genres: [ genre[0]._id ],
      image: '6.jpg',
      price: 16.99
    },
    {
      releaseYear: 1972,
      title: 'Exile on Main St.',
      artist: 'The Rolling Stones',
      genres: [ genre[1]._id ],
      image: '7.jpg',
      price: 30.99
    },
    {
      releaseYear: 1979,
      title: 'London Calling',
      artist: 'The Clash',
      genres: [ genre[1]._id ],
      image: '8.jpg',
      price: 19.99
    },
    {
      releaseYear: 1966,
      title: 'Blonde on Blonde',
      artist: 'Bob Dylan',
      genres: [ genre[1]._id, genre[3]._id ],
      image: '9.jpg',
      price: 25.99
    },
    {
      releaseYear: 1968,
      title: 'The Beatles ("The White Album")',
      artist: 'The Beatles',
      genres: [ genre[1]._id ],
      image: '10.jpg',
      price: 27.99
    },
    {
      releaseYear: 1976,
      title: 'The Sun Sessions',
      artist: 'Elvis Presley',
      genres: [ genre[1]._id ],
      image: '11.jpg',
      price: 27.99
    },
    {
      releaseYear: 1959,
      title: 'Kind of Blue',
      artist: 'Miles Davis',
      genres: [ genre[2]._id ],
      image: '12.jpg',
      price: 17.99
    },
    {
      releaseYear: 1967,
      title: 'The Velvet Underground & Nico',
      artist: 'The Velvet Underground',
      genres: [ genre[1]._id ],
      image: '13.jpg',
      price: 22.99
    },
    {
      releaseYear: 1969,
      title: 'Abbey Road',
      artist: 'The Beatles',
      genres: [ genre[1]._id ],
      image: '14.jpg',
      price: 15.99
    },
    {
      releaseYear: 1967,
      title: 'Are You Experienced',
      artist: 'The Jimi Hendrix Experience',
      genres: [ genre[1]._id, genre[3]._id ],
      image: '15.jpg',
      price: 23.99
    },
    {
      releaseYear: 1975,
      title: 'Blood on the Tracks',
      artist: 'Bob Dylan',
      genres: [ genre[1]._id ],
      image: '16.jpg',
      price: 19.99
    },
    {
      releaseYear: 1991,
      title: 'Nevermind',
      artist: 'Nirvana',
      genres: [ genre[1]._id ],
      image: '17.jpg',
      price: 19.99
    },
    {
      releaseYear: 1975,
      title: 'Born to Run',
      artist: 'Bruce Springsteen',
      genres: [ genre[1]._id ],
      image: '18.jpg',
      price: 15.99
    },
    {
      releaseYear: 1968,
      title: 'Astral Weeks',
      artist: 'Van Morrison',
      genres: [ genre[2]._id, genre[1]._id, genre[3]._id, genre[5]._id ],
      image: '19.jpg',
      price: 30.99
    },
    {
      releaseYear: 1982,
      title: 'Thriller',
      artist: 'Michael Jackson',
      genres: [ genre[0]._id, genre[4]._id ],
      image: '20.jpg',
      price: 18.99
    },
    {
      releaseYear: 1982,
      title: 'The Great Twenty_Eight',
      artist: 'Chuck Berry',
      genres: [ genre[1]._id ],
      image: '21.jpg',
      price: 22.99
    },
    {
      releaseYear: 1990,
      title: 'The Complete Recordings',
      artist: 'Robert Johnson',
      genres: [ genre[3]._id ],
      image: '22.jpg',
      price: 25.99
    },
    {
      releaseYear: 1970,
      title: 'John Lennon/Plastic Ono Band',
      artist: 'John Lennon / Plastic Ono Band',
      genres: [ genre[1]._id ],
      image: '23.jpg',
      price: 31.99
    },
    {
      releaseYear: 1973,
      title: 'Innervisions',
      artist: 'Stevie Wonder',
      genres: [ genre[0]._id ],
      image: '24.jpg',
      price: 22.99
    },
    {
      releaseYear: 1963,
      title: 'Live at the Apollo, 1962',
      artist: 'James Brown',
      genres: [ genre[0]._id ],
      image: '25.jpg',
      price: 26.99
    },
    {
      releaseYear: 1977,
      title: 'Rumours',
      artist: 'Fleetwood Mac',
      genres: [ genre[1]._id ],
      image: '26.jpg',
      price: 25.99
    },
    {
      releaseYear: 1987,
      title: 'The Joshua Tree',
      artist: 'U2',
      genres: [ genre[1]._id ],
      image: '27.jpg',
      price: 24.99
    },
    {
      releaseYear: 1971,
      title: "Who's Next",
      artist: 'The Who',
      genres: [ genre[1]._id ],
      image: '28.jpg',
      price: 26.99
    },
    {
      releaseYear: 1969,
      title: 'Led Zeppelin',
      artist: 'Led Zeppelin',
      genres: [ genre[1]._id ],
      image: '29.jpg',
      price: 31.99
    },
    {
      releaseYear: 1971,
      title: 'Blue',
      artist: 'Joni Mitchell',
      genres: [ genre[4]._id ],
      image: '30.jpg',
      price: 16.99
    },
    {
      releaseYear: 1965,
      title: 'Bringing It All Back Home',
      artist: 'Bob Dylan',
      genres: [ genre[1]._id, genre[5]._id ],
      image: '31.jpg',
      price: 24.99
    },
    {
      releaseYear: 1969,
      title: 'Let It Bleed',
      artist: 'The Rolling Stones',
      genres: [ genre[1]._id ],
      image: '32.jpg',
      price: 20.99
    },
    {
      releaseYear: 1976,
      title: 'Ramones',
      artist: 'Ramones',
      genres: [ genre[1]._id ],
      image: '33.jpg',
      price: 26.99
    },
    {
      releaseYear: 1968,
      title: 'Music From Big Pink',
      artist: 'The Band',
      genres: [ genre[1]._id ],
      image: '34.jpg',
      price: 18.99
    },
    {
      releaseYear: 1972,
      title: 'The Rise and Fall of Ziggy Stardust and the Spiders From Mars',
      artist: 'David Bowie',
      genres: [ genre[1]._id ],
      image: '35.jpg',
      price: 32.99
    },
    {
      releaseYear: 1971,
      title: 'Tapestry',
      artist: 'Carole King',
      genres: [ genre[1]._id, genre[4]._id ],
      image: '36.jpg',
      price: 17.99
    },
    {
      releaseYear: 1976,
      title: 'Hotel California',
      artist: 'Eagles',
      genres: [ genre[1]._id ],
      image: '37.jpg',
      price: 18.99
    },
    {
      releaseYear: 2001,
      title: 'The Anthology',
      artist: 'Muddy Waters',
      genres: [ genre[5]._id ],
      image: '38.jpg',
      price: 27.99
    },
    {
      releaseYear: 1963,
      title: 'Please Please Me',
      artist: 'The Beatles',
      genres: [ genre[1]._id ],
      image: '39.jpg',
      price: 25.99
    },
    {
      releaseYear: 1967,
      title: 'Forever Changes',
      artist: 'Love',
      genres: [ genre[1]._id ],
      image: '40.jpg',
      price: 20.99
    },
    {
      releaseYear: 1977,
      title: "Never Mind the Bollocks Here's the Sex Pistols",
      artist: 'Sex Pistols',
      genres: [ genre[1]._id ],
      image: '41.jpg',
      price: 25.99
    },
    {
      releaseYear: 1967,
      title: 'The Doors',
      artist: 'The Doors',
      genres: [ genre[1]._id ],
      image: '42.jpg',
      price: 26.99
    },
    {
      releaseYear: 1973,
      title: 'The Dark Side of the Moon',
      artist: 'Pink Floyd',
      genres: [ genre[1]._id ],
      image: '43.jpg',
      price: 25.99
    },
    {
      releaseYear: 1975,
      title: 'Horses',
      artist: 'Patti Smith',
      genres: [ genre[1]._id ],
      image: '44.jpg',
      price: 17.99
    },
    {
      releaseYear: 1969,
      title: 'The Band ("The Brown Album")',
      artist: 'The Band',
      genres: [ genre[7]._id, genre[8]._id ],
      image: '45.jpg',
      price: 22.99
    },
    {
      releaseYear: 1984,
      title: 'Legend: The Best of Bob Marley and The Wailers',
      artist: 'Bob Marley & The Wailers',
      genres: [ genre[6]._id ],
      image: '46.jpg',
      price: 23.99
    },
    {
      releaseYear: 1965,
      title: 'A Love Supreme',
      artist: 'John Coltrane',
      genres: [ genre[2]._id ],
      image: '47.jpg',
      price: 16.99
    },
    {
      releaseYear: 1988,
      title: 'It Takes a Nation of Millions to Hold Us Back',
      artist: 'Public Enemy',
      genres: [ genre[9]._id ],
      image: '48.jpg',
      price: 32.99
    },
    {
      releaseYear: 1971,
      title: 'At Fillmore East',
      artist: 'The Allman Brothers Band',
      genres: [ genre[1]._id, genre[3]._id ],
      image: '49.jpg',
      price: 34.99
    },
    {
      releaseYear: 1957,
      title: "Here's Little Richard",
      artist: 'Little Richard',
      genres: [ genre[1]._id, genre[3]._id ],
      image: '50.jpg',
      price: 18.99
    },
    {
      releaseYear: 1970,
      title: 'Bridge Over Troubled Water',
      artist: 'Simon & Garfunkel',
      genres: [ genre[1]._id ],
      image: '51.jpg',
      price: 33.99
    },
    {
      releaseYear: 1975,
      title: 'Greatest Hits',
      artist: 'Al Green',
      genres: [ genre[0]._id ],
      image: '52.jpg',
      price: 20.99
    },
    {
      releaseYear: 1964,
      title: 'Meet The Beatles!',
      artist: 'The Beatles',
      genres: [ genre[1]._id ],
      image: '53.jpg',
      price: 21.99
    },
    {
      releaseYear: 1991,
      title: 'The Birth of Soul',
      artist: 'Ray Charles',
      genres: [ genre[2]._id, genre[0]._id ],
      image: '54.jpg',
      price: 31.99
    },
    {
      releaseYear: 1968,
      title: 'Electric Ladyland',
      artist: 'The Jimi Hendrix Experience',
      genres: [ genre[1]._id, genre[3]._id ],
      image: '55.jpg',
      price: 23.99
    },
    {
      releaseYear: 1956,
      title: 'Elvis Presley',
      artist: 'Elvis Presley',
      genres: [ genre[1]._id ],
      image: '56.jpg',
      price: 33.99
    },
    {
      releaseYear: 1976,
      title: 'Songs in the Key of Life',
      artist: 'Stevie Wonder',
      genres: [ genre[0]._id ],
      image: '57.jpg',
      price: 24.99
    },
    {
      releaseYear: 1968,
      title: 'Beggars Banquet',
      artist: 'The Rolling Stones',
      genres: [ genre[1]._id, genre[0]._id, genre[4]._id ],
      image: '58.jpg',
      price: 22.99
    },
    {
      releaseYear: 1976,
      title: 'Chronicle: The 20 Greatest Hits',
      artist: 'Creedence Clearwater Revival',
      genres: [ genre[1]._id ],
      image: '59.jpg',
      price: 32.99
    },
    {
      releaseYear: 1969,
      title: 'Trout Mask Replica',
      artist: 'Captain Beefheart & His Magic Band',
      genres: [ genre[1]._id, genre[3]._id ],
      image: '60.jpg',
      price: 21.99
    },
    {
      releaseYear: 1970,
      title: 'Greatest Hits',
      artist: 'Sly & The Family Stone',
      genres: [ genre[0]._id ],
      image: '61.jpg',
      price: 23.99
    },
    {
      releaseYear: 1987,
      title: 'Appetite for Destruction',
      artist: "Guns N' Roses",
      genres: [ genre[1]._id ],
      image: '62.jpg',
      price: 20.99
    },
    {
      releaseYear: 1991,
      title: 'Achtung Baby',
      artist: 'U2',
      genres: [ genre[10]._id, genre[1]._id ],
      image: '63.jpg',
      price: 17.99
    },
    {
      releaseYear: 1971,
      title: 'Sticky Fingers',
      artist: 'The Rolling Stones',
      genres: [ genre[1]._id ],
      image: '64.jpg',
      price: 33.99
    },
    {
      releaseYear: 1991,
      title: 'Back to Mono (1958-1969)',
      artist: 'Phil Spector',
      genres: [ genre[1]._id, genre[0]._id, genre[4]._id ],
      image: '65.jpg',
      price: 19.99
    },
    {
      releaseYear: 1970,
      title: 'Moondance',
      artist: 'Van Morrison',
      genres: [ genre[2]._id, genre[1]._id, genre[0]._id, genre[5]._id ],
      image: '66.jpg',
      price: 15.99
    },
    {
      releaseYear: 2000,
      title: 'Kid A',
      artist: 'Radiohead',
      genres: [ genre[10]._id, genre[1]._id ],
      image: '67.jpg',
      price: 29.99
    },
    {
      releaseYear: 1979,
      title: 'Off the Wall',
      artist: 'Michael Jackson',
      genres: [ genre[0]._id, genre[4]._id ],
      image: '68.jpg',
      price: 15.99
    },
    {
      releaseYear: 1971,
      title: '[Led Zeppelin IV]',
      artist: 'Led Zeppelin',
      genres: [ genre[1]._id ],
      image: '69.jpg',
      price: 24.99
    },
    {
      releaseYear: 1977,
      title: 'The Stranger',
      artist: 'Billy Joel',
      genres: [ genre[1]._id ],
      image: '70.jpg',
      price: 34.99
    },
    {
      releaseYear: 1986,
      title: 'Graceland',
      artist: 'Paul Simon',
      genres: [
        genre[2]._id,
        genre[1]._id,
        genre[0]._id,
        genre[4]._id,
        genre[5]._id
      ],
      image: '71.jpg',
      price: 25.99
    },
    {
      releaseYear: 1972,
      title: 'Superfly',
      artist: 'Curtis Mayfield',
      genres: [ genre[0]._id, genre[8]._id ],
      image: '72.jpg',
      price: 31.99
    },
    {
      releaseYear: 1975,
      title: 'Physical Graffiti',
      artist: 'Led Zeppelin',
      genres: [ genre[1]._id ],
      image: '73.jpg',
      price: 16.99
    },
    {
      releaseYear: 1970,
      title: 'After the Gold Rush',
      artist: 'Neil Young',
      genres: [ genre[1]._id ],
      image: '74.jpg',
      price: 20.99
    },
    {
      releaseYear: 1991,
      title: 'Star Time',
      artist: 'James Brown',
      genres: [ genre[0]._id ],
      image: '75.jpg',
      price: 34.99
    },
    {
      releaseYear: 1984,
      title: 'Purple Rain',
      artist: 'Prince and the Revolution',
      genres: [ genre[10]._id, genre[1]._id, genre[0]._id, genre[8]._id ],
      image: '76.jpg',
      price: 17.99
    },
    {
      releaseYear: 1980,
      title: 'Back in Black',
      artist: 'AC/DC',
      genres: [ genre[1]._id ],
      image: '77.jpg',
      price: 33.99
    },
    {
      releaseYear: 1965,
      title: 'Otis Blue: Otis Redding Sings Soul',
      artist: 'Otis Redding',
      genres: [ genre[0]._id ],
      image: '78.jpg',
      price: 34.99
    },
    {
      releaseYear: 1969,
      title: 'Led Zeppelin II',
      artist: 'Led Zeppelin',
      genres: [ genre[1]._id ],
      image: '79.jpg',
      price: 27.99
    },
    {
      releaseYear: 1971,
      title: 'Imagine',
      artist: 'John Lennon',
      genres: [ genre[1]._id ],
      image: '80.jpg',
      price: 15.99
    },
    {
      releaseYear: 1977,
      title: 'The Clash',
      artist: 'The Clash',
      genres: [ genre[1]._id ],
      image: '81.jpg',
      price: 31.99
    },
    {
      releaseYear: 1972,
      title: 'Harvest',
      artist: 'Neil Young',
      genres: [ genre[1]._id ],
      image: '82.jpg',
      price: 23.99
    },
    {
      releaseYear: 1967,
      title: 'Axis: Bold as Love',
      artist: 'The Jimi Hendrix Experience',
      genres: [ genre[1]._id ],
      image: '83.jpg',
      price: 22.99
    },
    {
      releaseYear: 1967,
      title: 'I Never Loved a Man the Way I Love You',
      artist: 'Aretha Franklin',
      genres: [ genre[0]._id ],
      image: '84.jpg',
      price: 27.99
    },
    {
      releaseYear: 1968,
      title: 'Lady Soul',
      artist: 'Aretha Franklin',
      genres: [ genre[0]._id ],
      image: '85.jpg',
      price: 18.99
    },
    {
      releaseYear: 1984,
      title: 'Born in the U.S.A.',
      artist: 'Bruce Springsteen',
      genres: [ genre[1]._id ],
      image: '86.jpg',
      price: 32.99
    },
    {
      releaseYear: 1979,
      title: 'The Wall',
      artist: 'Pink Floyd',
      genres: [ genre[1]._id ],
      image: '87.jpg',
      price: 31.99
    },
    {
      releaseYear: 1968,
      title: 'At Folsom Prison',
      artist: 'Johnny Cash',
      genres: [ genre[5]._id ],
      image: '88.jpg',
      price: 25.99
    },
    {
      releaseYear: 1969,
      title: 'Dusty in Memphis',
      artist: 'Dusty Springfield',
      genres: [ genre[1]._id, genre[0]._id ],
      image: '89.jpg',
      price: 17.99
    },
    {
      releaseYear: 1972,
      title: 'Talking Book',
      artist: 'Stevie Wonder',
      genres: [ genre[0]._id ],
      image: '90.jpg',
      price: 23.99
    },
    {
      releaseYear: 1973,
      title: 'Goodbye Yellow Brick Road',
      artist: 'Elton John',
      genres: [ genre[1]._id ],
      image: '91.jpg',
      price: 33.99
    },
    {
      releaseYear: 1978,
      title: '20 Golden Greats',
      artist: 'Buddy Holly',
      genres: [ genre[1]._id ],
      image: '92.jpg',
      price: 31.99
    },
    {
      releaseYear: 1987,
      title: 'Sign "Peace" the Times',
      artist: 'Prince',
      genres: [ genre[1]._id, genre[6]._id ],
      image: '93.jpg',
      price: 15.99
    },
    {
      releaseYear: 1984,
      title: '40 Greatest Hits',
      artist: 'Hank Williams',
      genres: [ genre[5]._id ],
      image: '94.jpg',
      price: 29.99
    },
    {
      releaseYear: 1970,
      title: 'Bitches Brew',
      artist: 'Miles Davis',
      genres: [ genre[2]._id ],
      image: '95.jpg',
      price: 32.99
    },
    {
      releaseYear: 1969,
      title: 'Tommy',
      artist: 'The Who',
      genres: [ genre[1]._id ],
      image: '96.jpg',
      price: 34.99
    },
    {
      releaseYear: 1963,
      title: "The Freewheelin' Bob Dylan",
      artist: 'Bob Dylan',
      genres: [ genre[5]._id ],
      image: '97.jpg',
      price: 19.99
    },
    {
      releaseYear: 1978,
      title: "This Year's Model",
      artist: 'Elvis Costello',
      genres: [ genre[1]._id ],
      image: '98.jpg',
      price: 30.99
    },
    {
      releaseYear: 1971,
      title: "There's a Riot Goin' On",
      artist: 'Sly & The Family Stone',
      genres: [ genre[0]._id ],
      image: '99.jpg',
      price: 30.99
    },
    {
      releaseYear: 1968,
      title: 'Odessey and Oracle',
      artist: 'The Zombies',
      genres: [ genre[1]._id ],
      image: '100.jpg',
      price: 27.99
    }
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
