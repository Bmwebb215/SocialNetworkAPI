const mongoose = require('mongoose');
const { User, Thought } = require('../models/'); // Adjust the path as necessary
const connectToDatabase = require('../config/connection'); // Adjust the path as necessary

const seedUsers = [
  { username: 'user1', email: 'user1@example.com' },
  { username: 'user2', email: 'user2@example.com' },
  { username: 'user3', email: 'user3@example.com' },
  { username: 'user4', email: 'user4@example.com' },
  { username: 'user5', email: 'user5@example.com' },
  { username: 'user6', email: 'user6@example.com' },
  { username: 'user7', email: 'user7@example.com' },
  { username: 'user8', email: 'user8@example.com' },
  { username: 'user9', email: 'user9@example.com' },
  { username: 'user10', email: 'user10@example.com' },
];

const seedThoughts = [
  { thoughtText: 'Here is a cool thought from user1', username: 'user1' },
  { thoughtText: 'Here is a cool thought from user2', username: 'user2' },
  { thoughtText: 'Here is a cool thought from user3', username: 'user3' },
  { thoughtText: 'Here is a cool thought from user4', username: 'user4' },
  { thoughtText: 'Here is a cool thought from user5', username: 'user5' },
  { thoughtText: 'Here is a cool thought from user6', username: 'user6' },
  { thoughtText: 'Here is a cool thought from user7', username: 'user7' },
  { thoughtText: 'Here is a cool thought from user8', username: 'user8' },
  { thoughtText: 'Here is a cool thought from user9', username: 'user9' },
  { thoughtText: 'Here is a cool thought from user10', username: 'user10' },
];

connectToDatabase();

const seedDB = async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});
  
  const users = await User.insertMany(seedUsers);
  // To associate thoughts with users directly, we can use the inserted user IDs
  const thoughtsWithUserIds = seedThoughts.map((thought, index) => ({
    ...thought,
    username: users[index].username, // Assuming username is unique and users array is in the same order
  }));
  await Thought.insertMany(thoughtsWithUserIds);
  
  console.log('Database seeded with 10 users and 10 thoughts!');
};

seedDB().then(() => {
  mongoose.connection.close();
});
