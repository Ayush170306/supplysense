from fastapi import FastAPI
from pydantic import BaseModel
from model import predict_risk

app = FastAPI()

class SupplyInput(BaseModel):
    lead_time: int
    supplier_score: float
    inventory_turnover: float
    demand_volatility: float
    transport_cost: int
    geo_risk: int
    weather_factor: int
    stockout_history: int

@app.post("/predict")
def get_prediction(data: SupplyInput):
    # Convert object to list for the model
    features = [
        data.lead_time, data.supplier_score, data.inventory_turnover,
        data.demand_volatility, data.transport_cost, data.geo_risk,
        data.weather_factor, data.stockout_history
    ]
    
    risk_class, risk_prob = predict_risk(features)
    
    return {
        "risk_level": "High" if risk_class == 1 else "Low",
        "confidence_score": round(risk_prob * 100, 2),
        "recommendation": "Increase safety stock immediately" if risk_class == 1 else "Normal operations"
    }