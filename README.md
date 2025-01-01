# Book Explorer Application

This project is a web application that allows users to search for books using the Google Books API. It displays book details in an attractive and user-friendly interface, with features inspired by Goodreads.

---

## Features

- Search for books by title, author, or keywords.
- Display book details, including title, author, and a brief description.
- Responsive design for mobile and desktop devices.
- Beautiful UI with background images and styled components.

---

## Tech Stack

### **Frontend**
- React.js
- Material-UI (MUI)
- Axios

### **Backend**
- Node.js
- Express.js
- MongoDB

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Dinusha-hue/Online-Book-Reading-Application.gi
```

### 2. Setup Backend
```bash
cd backend
npm install
```

#### Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongo_connection_string
GOOGLE_BOOKS_API_KEY=your_google_books_api_key

#### Start the backend server:
```bash
npm start
```
### 3. Setup Frontend
```bash
cd frontend
npm install
```

#### Start the frontend development server:
```bash
npm start
```

## Folder Structure

### Backrnd
```bash
backend/
├── controllers/
│   └── bookController.js
├── models/
│   └── bookModel.js
├── routes/
│   └── bookRoutes.js
├── index.js
├── .env
```

###Frontend
```bash
frontend/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── BookList.jsx
│   │   │   └── NotFound.jsx
│   ├── components/
│   │   └── BookList.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── index.jsx
├── public/
│   └── images/
│       └── favicon.ico
```

