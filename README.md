# 🧠 AI Sentiment Analyzer (Full Stack)

![Project Status](https://img.shields.io/badge/Status-Active-success)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_FastAPI_|_PyTorch-blue)
![Model](https://img.shields.io/badge/AI-DistilBERT-orange)

A modern full-stack application that analyzes the sentiment (Positive/Negative) of text in real-time.

Unlike standard wrappers, this project uses a **custom fine-tuned DistilBERT model** that I trained and deployed to the Hugging Face Hub. The architecture is designed to be lightweight: the heavy model weights are offloaded to the cloud and fetched dynamically by the Python backend.

## 📸 Demo

![App Screenshot](./screenshot.png)

## 🏗️ Architecture

The app uses a **Hybrid Cloud Architecture**:

1.  **Frontend (React + Vite):** A responsive UI built with TypeScript for type safety.
2.  **Backend (FastAPI):** A high-performance Python API that serves as the inference engine.
3.  **AI Model (Hugging Face):** The backend automatically downloads and caches the model from the Hugging Face Hub, ensuring the repo remains lightweight (<5MB) while preserving full AI capabilities.

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite, CSS Modules
- **Backend:** Python 3.10+, FastAPI, Uvicorn
- **Machine Learning:** PyTorch, Transformers (Hugging Face)
- **Model:** DistilBERT (Fine-tuned on sentiment dataset)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v16+)
- Python (v3.9+)

### 1. Clone the Repository

```bash
git clone [https://github.com/SweetPotatoDabes/sentiment-fullstack.git](https://github.com/SweetPotatoDabes/sentiment-fullstack.git)
cd sentiment-fullstack
```
