# 🎯 InterviewIQ

**InterviewIQ** is an AI-powered interview preparation platform designed to help students and job seekers practice interviews, improve their performance, and become more confident before facing real interviews.

The platform provides a complete interview preparation experience with a modern React frontend, Node.js/Express backend, MongoDB database, authentication, interview management, performance tracking, and payment integration.

---

## 🚀 Features

- 🔐 User Authentication
- 👤 User Profile Management
- 🎯 AI-Powered Interview Practice
- 📝 Personalized Interview Questions
- 📊 Interview Performance Tracking
- 📈 Performance Analytics
- 📄 Resume/PDF Processing
- 💳 Razorpay Payment Integration
- 🔒 Protected API Routes
- 🌐 REST API Architecture
- 📱 Responsive User Interface
- ⚡ Fast React + Vite Frontend
- 🗄️ MongoDB Database
- 🔄 Redux State Management

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Redux
- React Router
- Axios
- Recharts
- Motion
- React Icons
- jsPDF
- Firebase

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- CORS
- Multer
- PDF.js
- Razorpay
- Axios
- dotenv

---

## 📁 Project Structure

```text
3.interviewIQ/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── public/
│   ├── routes/
│   ├── services/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/codedby-jay/3.interviewIQ.git

cd 3.interviewIQ
```

---

# 💻 Frontend Setup

Go to the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run on the Vite development server.

---

# 🖥️ Backend Setup

Open another terminal and go to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` folder.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id

RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Add any other environment variables required by the services used in the project.

Start the backend:

```bash
npm run dev
```

For production:

```bash
npm start
```

---

## 🔑 Environment Variables

The backend uses environment variables for sensitive configuration.

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used for authentication |
| `RAZORPAY_KEY_ID` | Razorpay API key |
| `RAZORPAY_KEY_SECRET` | Razorpay API secret |

> Never commit your `.env` file or expose API keys and secrets publicly.

---

## 🔄 Application Flow

```text
User
  │
  ▼
React Frontend
  │
  │ Axios API Requests
  ▼
Express.js Backend
  │
  ├── Authentication
  ├── Interview APIs
  ├── User APIs
  ├── Payment APIs
  └── File/PDF Processing
  │
  ▼
MongoDB
```

---

## 🎯 Main Modules

### 🔐 Authentication

Users can securely register and log in to the platform.

Authentication is handled using JWT-based authentication and protected backend routes.

### 👤 User Management

Users can manage their profile and access their interview-related information.

### 🧠 Interview System

Interview functionality allows users to practice interview questions and manage their interview sessions.

### 📊 Performance Tracking

Interview results can be stored and displayed to help users understand their performance and improve over time.

### 📄 Resume/PDF Processing

The backend includes PDF processing functionality for handling resume or document-based interview information.

### 💳 Payment System

Razorpay is integrated for handling payments and premium functionality.

---

## 📡 Backend Architecture

The backend follows a modular structure:

```text
Routes
   ↓
Controllers
   ↓
Services / Business Logic
   ↓
Models
   ↓
MongoDB
```

### Controllers

```text
auth.controller.js
interview.controller.js
payment.controller.js
user.controller.js
```

### Routes

```text
auth.route.js
interview.route.js
payment.route.js
user.route.js
```

This structure keeps API routes, business logic, and database models separated and easier to maintain.

---

## 📦 Available Scripts

### Client

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run preview
```

Previews the production build locally.

### Server

```bash
npm run dev
```

Starts the backend using Nodemon.

```bash
npm start
```

Starts the backend normally.

---

## 🔒 Security

InterviewIQ uses several security practices:

- JWT-based authentication
- Protected API routes
- Environment variables for secrets
- HTTP cookies for authentication handling
- CORS configuration
- Server-side validation
- Secure payment processing through Razorpay

---

## 🚧 Future Improvements

- 🤖 Advanced AI interview evaluation
- 🎤 Voice-based interviews
- 📹 Video interview analysis
- 🧠 More personalized question generation
- 📊 Advanced performance analytics
- 🏢 Company-specific interview preparation
- 📄 AI resume analysis
- 🏆 Interview progress and achievements
- 📱 Mobile application
- ☁️ Cloud deployment improvements

---

## 🤝 Contributing

Contributions are welcome.

### Steps

```bash
# Fork the repository

# Clone your fork
git clone <your-fork-url>

# Create a new branch
git checkout -b feature/your-feature

# Make your changes

# Commit your changes
git add .
git commit -m "Add your feature"

# Push your branch
git push origin feature/your-feature

# Create a Pull Request
```

---

## 👨‍💻 Author

**Jay Prajapati**

GitHub: [codedby-jay](https://github.com/codedby-jay)

---

## ⭐ Support

If you find InterviewIQ useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is available under the license included in the repository.
