
# Interactive Quiz App

A modern, web-based interactive quiz application built with **Node.js**, **Express.js** backend and a **vanilla JavaScript** frontend.

---

## Features

- Multiple-choice general knowledge questions loaded dynamically from a backend API  
- Timer countdown for each question (10 seconds)  
- Score tracking during the quiz  
- User name input before starting the quiz  
- Result page displaying user name, final score, and accuracy percentage  
- Play Again option to restart the quiz  

---

## Folder Structure

```

quiz-app/
├── backend/
│   ├── server.js          # Express backend API server
│   ├── questions.json     # JSON file with quiz questions
│   ├── package.json       # Backend project metadata and dependencies
│   └── node\_modules/      # Installed Node.js modules (created after npm install)
└── frontend/
├── index.html         # Frontend HTML page
├── style.css          # Styling for the quiz app
└── script.js          # Frontend JavaScript logic

````

---

## Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine (version 12+ recommended)

### Steps

1. **Clone this repository**

```bash
git clone <your-repo-url>
cd quiz-app
````

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Start the backend server**

```bash
node server.js
```

You should see:

```
✅ Server running at http://localhost:3000
```

4. **Open the frontend**

* Open `frontend/index.html` in your browser (double-click or open with a live server extension)

---

## How to Use

* Enter your name and click **Start Quiz**
* Answer the multiple-choice questions within 10 seconds each
* Your score updates as you progress
* After the last question, view your results with score and accuracy
* Click **Play Again** to restart

---

## Customize Questions

* Edit the `backend/questions.json` file to add or change quiz questions
* Each question should have:

  * `question`: String
  * `options`: Array of strings (choices)
  * `answer`: String (correct option)

---

## Technologies Used

* Node.js & Express.js for backend API
* Vanilla JavaScript for frontend logic
* HTML5 & CSS3 for UI

--- priyanshu gusain

---

Feel free to contribute or open issues for improvements!
