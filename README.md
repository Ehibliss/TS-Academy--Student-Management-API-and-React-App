# TS Academy - Student Management API & React App

This is my solution to the **TS Academy Student Management** assignment. The project is a full-stack CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express**, and **React**. It allowed me to strengthen my understanding of REST APIs, frontend-backend integration, and state management while building a complete student management system.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The challenge

Build a full-stack Student Management application that allows users to:

- Add a new student.
- View all students.
- View a student by ID.
- Update student information.
- Delete a student.
- Connect a React frontend to a Node.js and Express REST API.
- Store data using an in-memory JavaScript array.

### Links

- **Repository:** https://github.com/Ehibliss/TS-Academy--Student-Management-API-and-React-App

---

## My process

### Built with

#### Frontend

- React
- Vite
- JavaScript (ES6+)
- Axios
- CSS3
- Flexbox
- Responsive Design

#### Backend

- Node.js
- Express.js
- REST API
- Express Middleware
- CORS
- In-memory JavaScript Array

#### Development Tools

- Git & GitHub
- VS Code
- Postman

---

### What I learned

This project helped me gain practical experience building and connecting both the frontend and backend of a web application.

Some of the concepts I improved on include:

- Building RESTful APIs with Express.
- Creating CRUD operations using HTTP methods.
- Understanding request parameters and request bodies.
- Using Express middleware such as `express.json()` and CORS.
- Connecting a React application to a backend using Axios.
- Managing React state with `useState`.
- Fetching data using `useEffect`.
- Passing data and functions between React components using props.
- Organizing a React application into reusable components.
- Structuring a full-stack project with separate frontend and backend folders.

One feature I'm particularly proud of is successfully connecting the React frontend to the Express backend, allowing users to create, edit, view, and delete students without refreshing the page.

I also gained a much better understanding of how frontend applications communicate with REST APIs.

---

### Continued development

As I continue building full-stack applications, I want to focus on:

- Learning MongoDB and Mongoose for persistent data storage.
- Implementing user authentication and authorization.
- Improving API error handling and validation.
- Learning TypeScript for larger applications.
- Building more scalable React applications.
- Deploying both frontend and backend applications.
- Writing cleaner, reusable, and maintainable code.

---

### Clone the repository

```bash
git clone https://github.com/Ehibliss/TS-Academy--Student-Management-API-and-React-App.git
```

### Install Backend

```bash
cd backend
npm install
npm run dev
```

The backend runs on:

```
http://localhost:4000
```

### Install Frontend

Open another terminal.

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

## API Endpoints

| POST | `/createstudents` | Get all students |
| GET | `/getallstudents/:id` | Get a student by ID |
| GET | `/getstudentbyId` | Create a new student |
| PUT | `/updatestudentbyId/:id` | Update a student |
| DELETE | `/deletestudentbyId/:id` | Delete a student |

## Author

- **Portfolio:** https://blessingehi.netlify.app/
- **GitHub:** https://github.com/Ehibliss
- **LinkedIn:** https://www.linkedin.com/in/blessing-ehi/

## Acknowledgments

This project was completed as part of the **TS Academy Backend Development** program.

I'd like to thank the instructors for designing practical assignments that encouraged me to apply full-stack development concepts.
