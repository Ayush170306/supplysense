import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib

# 1. Generate Synthetic Training Data (Simulating Real Supply Chain patterns)
def train_initial_model():
    np.random.seed(42)
    n_samples = 1000
    
    data = {
        'lead_time': np.random.randint(1, 30, n_samples),
        'supplier_score': np.random.uniform(0.4, 1.0, n_samples),
        'inventory_turnover': np.random.uniform(1, 15, n_samples),
        'demand_volatility': np.random.uniform(0, 1, n_samples),
        'transport_cost': np.random.randint(100, 1000, n_samples),
        'geo_risk': np.random.randint(1, 10, n_samples),
        'weather_factor': np.random.randint(0, 2, n_samples),
        'stockout_history': np.random.randint(0, 5, n_samples)
    }
    
    df = pd.DataFrame(data)
    
    # Logic for target 'Risk': High risk if lead time is high AND supplier score is low, etc.
    df['risk'] = ((df['lead_time'] > 20) | (df['supplier_score'] < 0.6) | (df['geo_risk'] > 7)).astype(int)
    
    X = df.drop('risk', axis=1)
    y = df['risk']
    
    model = RandomForestClassifier(n_estimators=100)
    model.fit(X, y)
    
    # Save the model
    joblib.dump(model, 'supply_model.pkl')
    print("Model Trained and Saved Successfully!")

# 2. Prediction Function
def predict_risk(features_list):
    try:
        model = joblib.load('supply_model.pkl')
    except:
        train_initial_model()
        model = joblib.load('supply_model.pkl')
        
    prediction = model.predict([features_list])
    probability = model.predict_proba([features_list])[0][1] # Probability of High Risk
    return int(prediction[0]), float(probability)