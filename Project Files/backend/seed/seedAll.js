require("dotenv").config();
const connectDB = require("../config/connect");

// Schemas
const User = require("../schemas/userModel");
const Course = require("../schemas/courseModel");
const Enrollment = require("../schemas/enrolledCourseModel");
const Payment = require("../schemas/coursePaymentModel");

// 🔥 Utility to convert module title → module object
const createModuleSections = (arr) =>
  arr.map((title, index) => ({
    S_title: `Module ${index + 1}: ${title}`,
    S_description: `This module covers: ${title}.`
  }));

// -------------------------------------------------------------------

const seedAll = async () => {
  try {
    await connectDB();

    console.log("🔥 Clearing old data...");
    await User.deleteMany();
    await Course.deleteMany();
    await Enrollment.deleteMany();
    await Payment.deleteMany();

    console.log("👤 Seeding Users...");
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

    const student = users.find(u => u.type === "student");
    const educator = users.find(u => u.type === "educator");

    // -------------------------------------------------------------------
    // 📚 MODULE DATA
    // -------------------------------------------------------------------

    const fullstackModules = [
      "HTML Basics", "HTML Tags Deep Dive", "CSS Fundamentals", "Flexbox & Grid",
      "Responsive Web Design", "JavaScript Basics", "Functions & Scope",
      "Async JS & Promises", "JavaScript ES6+ Concepts", "DOM Manipulation",
      "React Introduction", "React Hooks", "React Routing", "State Management",
      "Redux Toolkit", "Node.js Basics", "Express.js Intro", "REST APIs",
      "MongoDB Basics", "Mongoose Models", "Authentication (JWT)",
      "MERN Deployment"
    ];

    const blockchainModules = [
      "What is Blockchain?", "Crypto Fundamentals", "Bitcoin Architecture",
      "Ethereum Architecture", "Smart Contracts 101", "Solidity Basics",
      "Gas, Fees & Transactions", "Wallets & Addresses", "EVM Overview",
      "Deploying Smart Contracts", "ERC-20 Tokens", "ERC-721 NFTs",
      "DAOs Overview", "DApps in Web3", "Metamask Integration",
      "Intermediate Solidity", "Remix IDE", "Hardhat Basics",
      "Foundry Basics", "Web3.js & Ethers.js", "Build a Crypto App"
    ];

    const uiuxModules = [
      "Introduction to UI/UX", "Design Thinking", "User Research",
      "Personas & Scenarios", "Wireframing", "Low-Fidelity Prototypes",
      "High-Fidelity Prototypes", "Figma Basics", "Figma Components",
      "Design Systems", "Color Theory", "Typography Basics",
      "Layout Principles", "UX Writing", "Interaction Design",
      "Accessibility in UX", "Usability Testing", "Portfolio Building",
      "Responsive Design", "Product Thinking", "Handoff to Developers"
    ];

    const pythonModules = [
      "Python Introduction", "Variables & Data Types", "Loops & Conditions",
      "Functions & Arguments", "Modules & Packages", "File Handling",
      "Error Handling", "Object-Oriented Python", "Advanced OOP",
      "Python Collections", "Lambda & Map/Filter", "Working with APIs",
      "Database with Python", "Flask Basics", "Flask Routing",
      "Templates & Jinja", "Django Basics", "Django ORM",
      "Authentication with Django", "Build a Full Web App",
      "Cloud Deployment"
    ];

    // -------------------------------------------------------------------
    // 📚 Seeding Courses (Correct Section Format)
    // -------------------------------------------------------------------

    console.log("📚 Seeding Courses...");

    const courses = await Course.insertMany([
      {
        userId: educator._id.toString(),
        C_educator: educator.name,
        C_title: "Full Stack Development Bootcamp",
        C_categories: "Web Development",
        C_price: "2999",
        C_description: "Learn MERN stack from basics to advanced deployment.",
        sections: createModuleSections(fullstackModules)
      },
      {
        userId: educator._id.toString(),
        C_educator: educator.name,
        C_title: "Blockchain for Beginners",
        C_categories: "Blockchain",
        C_price: "3999",
        C_description: "Deep dive into blockchain, Ethereum & smart contracts.",
        sections: createModuleSections(blockchainModules)
      },
      {
        userId: educator._id.toString(),
        C_educator: educator.name,
        C_title: "UI/UX Design Masterclass",
        C_categories: "Design",
        C_price: "2499",
        C_description: "Become a professional UI/UX designer using Figma.",
        sections: createModuleSections(uiuxModules)
      },
      {
        userId: educator._id.toString(),
        C_educator: educator.name,
        C_title: "Python for Absolute Beginners",
        C_categories: "Programming",
        C_price: "1999",
        C_description: "Learn Python from zero to full-stack web development.",
        sections: createModuleSections(pythonModules)
      },
      {
    userId: educator._id.toString(),
    C_educator: educator.name,
    C_title: "JavaScript Essentials (FREE)",
    C_categories: "Programming",
    C_price: "free",
    C_description: "A complete beginner-friendly introduction to JavaScript.",
    sections: createModuleSections([
      "What is JavaScript?",
      "Variables and Data Types",
      "Functions Explained Simply",
      "Conditionals & Loops",
      "Arrays & Objects",
      "Basic DOM Manipulation",
      "Events in JavaScript",
      "Beginner Mini Project"
    ])
  },

  // 2️⃣ FREE COURSE – Intro to Web3 & Crypto
  {
    userId: educator._id.toString(),
    C_educator: educator.name,
    C_title: "Intro to Web3 & Crypto (FREE)",
    C_categories: "Web3",
    C_price: "free",
    C_description: "A simple introduction to blockchain, wallets & Web3 apps.",
    sections: createModuleSections([
      "What is Web3?",
      "How Crypto Works",
      "Wallets & Private Keys",
      "Sending Transactions",
      "What is a Smart Contract?",
      "Gas Fees Explained",
      "Intro to NFTs",
      "Building Your First Wallet"
    ])
  },

  // 3️⃣ FREE COURSE – Basics of UI/UX Thinking
  {
    userId: educator._id.toString(),
    C_educator: educator.name,
    C_title: "UI/UX Thinking Basics (FREE)",
    C_categories: "Design",
    C_price: "free",
    C_description: "Learn core UI/UX concepts for beginners.",
    sections: createModuleSections([
      "What is UI/UX?",
      "Understanding Users",
      "Design Flow Basics",
      "What Makes a Good Interface?",
      "Wireframing Fundamentals",
      "Color Basics",
      "Typography Essentials",
      "Beginner UI Redesign Task"
    ])
  },

  // 4️⃣ FREE COURSE – Python Quickstart
  {
    userId: educator._id.toString(),
    C_educator: educator.name,
    C_title: "Python Quickstart (FREE)",
    C_categories: "Programming",
    C_price: "free",
    C_description: "Learn Python fundamentals in under 3 hours.",
    sections: createModuleSections([
      "Why Python?",
      "Installing Python",
      "Your First Python Script",
      "Inputs & Outputs",
      "Loops & Conditions",
      "Lists & Dictionaries",
      "Functions Basics",
      "Mini Python Exercise"
    ])
  }
    ]);

    // -------------------------------------------------------------------
    // 📘 Enrollment Example
    // -------------------------------------------------------------------

    const bootcampCourse = courses[0];

    console.log("📝 Seeding Enrollment...");

    await Enrollment.create({
      courseId: bootcampCourse._id,
      userId: student._id,
      course_Length: 40,
      progress: [{ lesson: 1, completed: true }],
    });

    // -------------------------------------------------------------------
    // 💳 Payment Example
    // -------------------------------------------------------------------

    console.log("💳 Seeding Payment...");

    await Payment.create({
      userId: student._id,
      courseId: bootcampCourse._id,
      cardDetails: {
        cardholdername: "John Doe",
        cardnumber: 1111222233334444,
        cvvcode: 123,
        expmonthyear: "12/28",
      },
      status: "enrolled",
    });

    console.log("🎉 All data seeded successfully with full module support!");
    process.exit();

  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
};

seedAll();
