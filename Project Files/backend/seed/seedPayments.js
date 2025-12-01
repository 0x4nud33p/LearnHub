const connectDB = require("../config/connect");
require("dotenv").config();
const Payment = require("../schemas/coursePaymentModel");
const User = require("../schemas/userModel");
const Course = require("../schemas/courseModel");

const seedPayments = async () => {
  await connectDB();

  await Payment.deleteMany();

  const student = await User.findOne({ type: "student" });
  const course = await Course.findOne({ C_title: "Full Stack Development Bootcamp" });

  const pay = await Payment.create({
    userId: student._id,
    courseId: course._id,
    cardDetails: {
      cardholdername: "John Doe",
      cardnumber: 1111222233334444,
      cvvcode: 123,
      expmonthyear: "12/28",
    },
    status: "enrolled",
  });

  console.log("Payment Seeded:", pay);
  process.exit();
};

seedPayments();
