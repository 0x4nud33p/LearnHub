# LearnHub: Your Center for Skill Enhancement [Video Demo](https://drive.google.com/file/d/1fvrfutEKcMuorSnnsSSwAVw3A3r7NbiY/view?usp=sharing)

[![GitHub Repository](https://img.shields.io/badge/GitHub-LearnHub-blue?style=flat-square&logo=github)](https://github.com/0x4nud33p/learnhub)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)

## 🎯 Overview

LearnHub is a comprehensive Online Learning Platform (OLP) designed to provide flexible and accessible education through digital means. Built with modern web technologies, it offers a user-friendly interface for learners, instructors, and administrators to interact seamlessly in a digital learning environment.

## ✨ Features

### 🎓 For Students
- **User-friendly Registration & Login** - Easy account creation and secure authentication
- **Course Discovery** - Browse courses by category, difficulty level, and popularity
- **Flexible Learning** - Self-paced learning with progress tracking
- **Interactive Elements** - Discussion forums, chat rooms, and live webinars
- **Certification System** - Earn digital certificates upon course completion
- **Multi-device Access** - Learn from anywhere on any device
- **Payment Integration** - Access to both free and premium courses

### 👨‍🏫 For Teachers
- **Course Creation** - Upload and organize course materials
- **Content Management** - Add sections, modules, and assignments
- **Student Analytics** - Monitor course enrollments and student progress
- **Interactive Tools** - Engage with students through discussions and webinars

### 👨‍💼 For Administrators
- **Platform Oversight** - Monitor user activity and course listings
- **User Management** - Handle user accounts and platform integrity
- **Analytics Dashboard** - Track platform performance and engagement
- **Course Moderation** - Ensure content quality and compliance

## 🛠️ Technology Stack

### Frontend
- **React.js** - Modern UI library for building interactive interfaces
- **Bootstrap & Material UI** - Responsive design and component libraries
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **RESTful APIs** - Standard API architecture

### Database
- **MongoDB** - NoSQL database for scalable data storage

### Tools & Utilities
- **ESLint** - Code linting and formatting
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
learnhub/
├── README.md
├── backend/
│   ├── index.js                    # Main server entry point
│   ├── package.json               # Backend dependencies
│   ├── .env.example              # Environment variables template
│   ├── config/
│   │   └── connect.js            # Database connection configuration
│   ├── controllers/
│   │   ├── adminController.js    # Admin-related business logic
│   │   └── userControllers.js    # User-related business logic
│   ├── middlewares/
│   │   └── authMiddleware.js     # Authentication middleware
│   ├── routers/
│   │   ├── adminRoutes.js        # Admin API routes
│   │   └── userRoutes.js         # User API routes
│   └── schemas/
│       ├── courseModel.js        # Course data model
│       ├── coursePaymentModel.js # Payment data model
│       ├── enrolledCourseModel.js# Enrollment data model
│       └── userModel.js          # User data model
└── frontend/
    ├── README.md
    ├── index.html                # Main HTML template
    ├── package.json             # Frontend dependencies
    ├── vite.config.js           # Vite configuration
    ├── .eslintrc.cjs           # ESLint configuration
    └── src/
        ├── App.css             # Global styles
        ├── App.jsx             # Main React component
        ├── main.jsx            # React entry point
        └── components/
            ├── admin/          # Admin-specific components
            │   ├── AdminHome.jsx
            │   └── AllCourses.jsx
            ├── common/         # Shared components
            │   ├── AllCourses.jsx
            │   ├── AxiosInstance.jsx
            │   ├── Dashboard.jsx
            │   ├── Home.jsx
            │   ├── Login.jsx
            │   ├── NavBar.jsx
            │   ├── Register.jsx
            │   └── UserHome.jsx
            └── user/           # User-specific components
                ├── student/
                │   ├── CourseContent.jsx
                │   ├── EnrolledCourses.jsx
                │   └── StudentHome.jsx
                └── teacher/
                    ├── AddCourse.jsx
                    └── TeacherHome.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/0x4nud33p/learnhub.git
   cd learnhub
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Copy environment variables
   cp .env.example .env
   # Edit .env with your MongoDB connection string and other configs
   
   # Start the backend server
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   
   # Start the development server
   npm run dev
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the backend directory with the following variables:
   ```env
   MONGODB=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

### Running the Application

1. Start MongoDB service
2. Run the backend server: `npm start` (from backend directory)
3. Run the frontend development server: `npm run dev` (from frontend directory)
4. Open your browser and navigate to `http://localhost:5173`

## 🔧 API Endpoints

### User Routes
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User authentication
- `GET /api/users/profile` - Get user profile
- `GET /api/users/courses` - Get enrolled courses

### Admin Routes
- `GET /api/admin/users` - Get all users
- `GET /api/admin/courses` - Get all courses
- `POST /api/admin/courses` - Create new course
- `PUT /api/admin/courses/:id` - Update course
- `DELETE /api/admin/courses/:id` - Delete course

### Course Routes
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses/enroll` - Enroll in course
- `POST /api/courses/payment` - Process course payment

## 🎯 Usage Scenarios

### Student Journey
1. **Registration**: Create account with email and password
2. **Course Discovery**: Browse and filter courses by category and difficulty
3. **Enrollment**: Select and enroll in desired courses
4. **Learning**: Access course materials, videos, and assignments
5. **Interaction**: Participate in discussions and webinars
6. **Certification**: Complete courses and earn digital certificates

### Teacher Workflow
1. **Course Creation**: Upload and structure course content
2. **Content Management**: Add modules, sections, and resources
3. **Student Engagement**: Monitor progress and interact with learners
4. **Analytics**: Track course performance and student feedback

### Admin Dashboard
1. **Platform Monitoring**: Oversee user activity and system health
2. **User Management**: Handle registrations and account issues
3. **Course Oversight**: Ensure content quality and compliance
4. **Analytics**: Generate reports on platform usage and performance

## 🤝 Contributing

We welcome contributions to LearnHub! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and structure
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**0x4nud33p**
- GitHub: [@0x4nud33p](https://github.com/0x4nud33p)
- Project Link: [https://github.com/0x4nud33p/learnhub](https://github.com/0x4nud33p/learnhub)

## 🙏 Acknowledgments

- Thanks to all contributors who help improve LearnHub
- Inspired by the need for accessible online education
- Built with modern web technologies and best practices

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/0x4nud33p/learnhub/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the issue for faster resolution

---

**Happy Learning! 🎓