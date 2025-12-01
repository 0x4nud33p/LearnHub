const connectDB = require("../config/connect");
require("dotenv").config();
const Course = require("../schemas/courseModel");
const User = require("../schemas/userModel");

const seedCourses = async () => {
  await connectDB();

  await Course.deleteMany();

  const educator = await User.findOne({ type: "educator" });

  const courses = await Course.insertMany([
    {
      userId: educator._id.toString(),
      C_educator: educator.name,
      C_title: "Full Stack Development Bootcamp",
      C_categories: "Web Development",
      C_price: "2999",
      C_description: "Learn MERN stack from scratch.",
      sections: {
        intro: "Course Introduction",
        modules: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      },
    },
    {
      userId: educator._id.toString(),
      C_educator: educator.name,
      C_title: "Blockchain for Beginners",
      C_categories: "Blockchain",
      C_price: "3999",
      C_description: "Understand blockchain, crypto, and smart contracts.",
      sections: {
        intro: "Blockchain Basics",
        modules: ["Bitcoin", "Ethereum", "Smart Contracts"],
      },
    },
  ]);

  console.log("Courses Seeded:", courses);
  process.exit();
};

seedCourses();
