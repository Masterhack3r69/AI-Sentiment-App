from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_id = "SweetPotatoDabes/My_Sentiment_Model"

print(f"Loading AI from Cloud ({model_id})...")
classifier = pipeline("text-classification", model=model_id, tokenizer=model_id)
print("AI Loaded Successfully!")

class Item(BaseModel):
    text: str

@app.post("/predict")
def predict_sentiment(item: Item):
    result = classifier(item.text)[0]
    
    label = "POSITIVE" if result['label'] == "LABEL_1" else "NEGATIVE"
    confidence = result['score']
    
    return {
        "sentiment": label, 
        "confidence": confidence,
        "original_text": item.text
    }
