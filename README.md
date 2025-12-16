# 🧠 AI Sentiment Analyzer (Full Stack)

![Project Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_FastAPI_|_PyTorch-blue?style=flat-square)
![Model](https://img.shields.io/badge/AI-DistilBERT-orange?style=flat-square)

A modern full-stack application that analyzes the sentiment (Positive/Negative) of text in real-time.

Unlike standard API wrappers, this project uses a **custom fine-tuned DistilBERT model** that I trained and deployed. The architecture is designed for efficiency: heavy model weights are offloaded to the Hugging Face Hub and fetched dynamically by the Python backend, keeping the local codebase lightweight.

![alt text](client\src\assets\image.png)

## 🏗️ Architecture

The app uses a **Hybrid Cloud Architecture**:

1.  **Frontend (React + Vite):** A responsive, type-safe UI built with TypeScript.
2.  **Backend (FastAPI):** A high-performance Python API acting as the inference engine.
3.  **AI Model (Hugging Face):** The backend automatically downloads and caches the model weights from the cloud, ensuring portable and consistent performance across different machines.

## 🛠️ Tech Stack

### Frontend

- **Framework:** React (Vite)
- **Language:** TypeScript
- **Styling:** CSS Modules / Standard CSS

### Backend

- **API:** FastAPI (Python 3.10+)
- **Server:** Uvicorn
- **ML Engine:** PyTorch, Transformers
- **Model Source:** Hugging Face Hub

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.9 or higher)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AI-Sentiment-App

```

###2. Setup the AI Backend

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

_Wait until you see "✅ Model loaded!" in the terminal._

###3. Setup the Frontend

```bash
cd client

# Install dependencies
npm install

# Start the UI
npm run dev

```

Open your browser to `http://localhost:5173`.

#Enjoy

![alt text](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGIwc3J2eWlhZHB0bWhuNTI4b211MzI3ZmlpcmoyNHR6aW01cmhyZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rMEJyjch7L1tlRlCl3/giphy.gif)
