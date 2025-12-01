const connectDB = require("../config/connect");
require("dotenv").config();
const User = require("../schemas/userModel");

const seedUsers = async () => {
  await connectDB();

  await User.deleteMany(); // cleanup old data

  const users = await User.insertMany([
    {
      name: "John Doe",
      email: "john@example.com",
      password: "123456",
      type: "student",
    },
    {
      name: "Sarah Lee",
      email: "sarah@example.com",
      password: "123456",
      type: "educator",
    },
  ]);

  console.log("Users Seeded:", users);
  process.exit();
};

seedUsers();
