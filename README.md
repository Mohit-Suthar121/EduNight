# EduNight Frontend

A modern educational platform frontend built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.


## 🌐 Live Demo

👉 **[View Live Website](https://edu-night.vercel.app/)**

## 🚀 Features

* 🏠 Home page
* 📚 Courses listing
* 📖 Course details
* 🎓 Student dashboard
* 🧭 Shared navigation/layout
* 🔗 Client-side routing with React Router
* 📱 Responsive UI

## 🛠️ Tech Stack

* **React**
* **Vite**
* **React Router DOM**
* **Tailwind CSS**
* **JavaScript (ES6+)**

## 📁 Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   ├── MainLayout.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── CoursesPage.jsx
│   │   └── CourseDetailsPage.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🔗 Routes

| Route          | Page                |
| -------------- | ------------------- |
| `/`            | Home Page           |
| `/dashboard`   | Student Dashboard   |
| `/courses`     | Courses Page        |
| `/courses/:id` | Course Details Page |

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the frontend

```bash
cd frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## 💻 Local Development

Once the dependencies have been installed, whenever you want to run the frontend locally:

```bash
cd frontend
npm run dev
```

That's it.

You **do not need to run a separate command for React**. Vite handles the development server.

## 📦 Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Locally previews the production build.

```bash
npm run lint
```

Runs ESLint checks, if configured.

## 🧭 Routing

The application uses `react-router-dom` for client-side routing.

The main routes are configured in `App.jsx`:

```jsx
<Routes>
  <Route element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<StudentDashboard />} />
    <Route path="/courses" element={<CoursesPage />} />
    <Route path="/courses/:id" element={<CourseDetailsPage />} />
  </Route>
</Routes>
```

`MainLayout` acts as the shared layout for the application's pages.

## 🏗️ Production Build

To create a production-ready build:

```bash
npm run build
```

The generated files will be placed in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 👨‍💻 Development

This project is currently under active development. New pages, components, API integrations, authentication, and other platform features may be added as development continues.
