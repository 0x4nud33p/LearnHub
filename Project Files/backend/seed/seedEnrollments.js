const connectDB = require("../config/connect");
require("dotenv").config();
const Enrollment = require("../schemas/enrolledCourseModel");
const User = require("../schemas/userModel");
const Course = require("../schemas/courseModel");

const seedEnrollments = async () => {
  await connectDB();

  await Enrollment.deleteMany();

  const student = await User.findOne({ type: "student" });
  const course = await Course.findOne({ C_title: "Full Stack Development Bootcamp" });

  const enroll = await Enrollment.create({
    courseId: course._id,
    userId: student._id,
    course_Length: 10,
    progress: [{ lesson: 1, completed: true }],
  });

  console.log("Enrollment Seeded:", enroll);
  process.exit();
};

seedEnrollments();
