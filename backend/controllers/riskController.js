const axios = require("axios");

exports.getRisk = async (req, res) => {
  try {
    // req.body now contains lead_time, supplier_score, etc.
    // We forward the entire object to the FastAPI service running on port 8000
    const response = await axios.post("http://127.0.0.1:8000/predict", req.body);
    
    // The FastAPI service returns {risk_level, confidence_score, recommendation}
    res.json(response.data);
  } catch (error) {
    console.error("ML Service Error:", error.message);
    res.status(500).json({ 
      message: "Machine Learning Service is currently unreachable.",
      error: error.message 
    });
  }
};