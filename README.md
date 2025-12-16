## 🧠 AI Sentiment Analyzer

![Project Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_FastAPI_|_PyTorch-blue?style=flat-square)
![Model](https://img.shields.io/badge/AI-DistilBERT-orange?style=flat-square)

A full-stack web app that classifies text as **positive** or **negative** in real time using a custom fine-tuned DistilBERT model.

This project does not rely on a third-party sentiment API. The model was trained, exported, and deployed by the developer. Model weights are hosted on Hugging Face and loaded dynamically by the backend to keep the repository small and easy to run.

![App Screenshot](client/src/assets/image.png)

---

## 🏗️ Architecture

The system follows a hybrid cloud setup:

1. **Frontend (React + Vite)**
   A fast, responsive UI written in TypeScript.

2. **Backend (FastAPI)**
   A Python API that handles inference and model loading.

3. **AI Model (Hugging Face Hub)**
   The backend downloads and caches the trained DistilBERT weights on startup, allowing consistent results across environments.

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* TypeScript
* CSS Modules / plain CSS

### Backend

* FastAPI (Python 3.10+)
* Uvicorn
* PyTorch
* Transformers
* Hugging Face Hub

---

## 🚀 Getting Started

### Prerequisites

* Node.js v16+
* Python v3.9+

---

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AI-Sentiment-App
```

---

### 2. Set Up the Backend

```bash
cd server

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Mac/Linux)
# source venv/bin/activate

# Install dependencies
pip install fastapi uvicorn transformers torch

# Start the API
uvicorn api:app --reload
```

Wait until the terminal shows:

```
✅ Model loaded!
```

---

### 3. Set Up the Frontend

```bash
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser at:
`http://localhost:5173`

---

## 🎯 Features

* Real-time sentiment prediction
* Custom fine-tuned DistilBERT model
* Clean API separation between UI and ML logic
* Lightweight repository with cloud-hosted model weights

---

![Demo GIF](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGIwc3J2eWlhZHB0bWhuNTI4b211MzI3ZmlpcmoyNHR6aW01cmhyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rMEJyjch7L1tlRlCl3/giphy.gif)

