import { useState } from "react";
import axios from "axios";
import { 
  Activity, AlertTriangle, BarChart3, Box, ChevronRight, 
  Globe, LayoutDashboard, LogOut, Settings, Truck, 
  CloudSun, Database, Users, ShieldCheck, History
} from "lucide-react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import PageTransition from "../components/PageTransition";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const [formData, setFormData] = useState({
    lead_time: "", supplier_score: "", inventory_turnover: "",
    demand_volatility: "", transport_cost: "", geo_risk: "",
    weather_factor: 0, stockout_history: ""
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const predict = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/risk/predict", formData);
      setResult(res.data);
    } catch (err) { console.error(err); }
  };

  return (
    <PageTransition>
      <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
        
        {/* --- 1. PERSISTENT SIDEBAR (Occupies 15% width) --- */}
        <div className="bg-dark text-white p-4 d-flex flex-column shadow-lg" style={{ width: "260px", position: "fixed", height: "100vh" }}>
          <div className="d-flex align-items-center mb-5 text-primary fw-bold fs-4">
            <Box className="me-2" /> SupplySense
          </div>
          <nav className="nav flex-column flex-grow-1 gap-2">
            <a className="nav-link text-white active bg-primary rounded shadow-sm" href="#"><LayoutDashboard size={18} className="me-2"/> Overview</a>
            <a className="nav-link text-secondary" href="#"><Truck size={18} className="me-2"/> Shipments</a>
            <a className="nav-link text-secondary" href="#"><Database size={18} className="me-2"/> Inventory</a>
            <a className="nav-link text-secondary" href="#"><Users size={18} className="me-2"/> Suppliers</a>
            <a className="nav-link text-secondary" href="#"><Globe size={18} className="me-2"/> Global Map</a>
            <a className="nav-link text-secondary" href="#"><History size={18} className="me-2"/> Audit Logs</a>
          </nav>
          <div className="border-top border-secondary pt-4">
            <a className="nav-link text-secondary mb-2" href="#"><Settings size={18} className="me-2"/> Settings</a>
            <button className="btn btn-outline-danger btn-sm w-100 d-flex align-items-center justify-content-center">
              <LogOut size={16} className="me-2" /> Logout
            </button>
          </div>
        </div>

        {/* --- MAIN CONTENT (Occupies 85% width) --- */}
        <div className="flex-grow-1" style={{ marginLeft: "260px", padding: "30px" }}>
          
          {/* TOP NAVBAR / HEADER */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold m-0 text-dark">Logistics Command Center</h2>
              <p className="text-muted small m-0">System Status: <span className="text-success">● AI Models Online</span></p>
            </div>
            <div className="d-flex gap-3">
               <div className="card px-3 py-2 border-0 shadow-sm d-flex flex-row align-items-center">
                  <ShieldCheck className="text-primary me-2" size={20}/>
                  <span className="small fw-bold text-dark">Enterprise Secure</span>
               </div>
               <div className="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>AA</div>
            </div>
          </div>

          {/* 2. KPI ROW (Filling the top space) */}
          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 border-start border-primary border-4">
                <div className="text-muted small fw-bold">Active Shipments</div>
                <div className="h3 fw-bold m-0">1,284</div>
                <div className="text-success small">↑ 12% vs last month</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 border-start border-warning border-4">
                <div className="text-muted small fw-bold">Delayed Nodes</div>
                <div className="h3 fw-bold m-0 text-warning">14</div>
                <div className="text-danger small">Critical: 3</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 border-start border-success border-4">
                <div className="text-muted small fw-bold">Supplier Avg Score</div>
                <div className="h3 fw-bold m-0">9.2</div>
                <div className="text-muted small">Top Tier Stability</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm p-3 border-start border-info border-4">
                <div className="text-muted small fw-bold">Daily AI Queries</div>
                <div className="h3 fw-bold m-0">452</div>
                <div className="text-info small">Real-time Inference</div>
              </div>
            </div>
          </div>

          {/* 3. MAIN BENTO GRID */}
          <div className="row g-4">
            
            {/* Input Config (Left - 60% wide) */}
            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4 h-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold m-0 d-flex align-items-center">
                    <Activity className="text-primary me-2" size={20}/> Risk Prediction Model
                  </h5>
                  <span className="badge bg-light text-primary border border-primary">Random Forest v2.1</span>
                </div>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="small fw-bold text-secondary mb-1">Lead Time (Actual)</label>
                    <input name="lead_time" className="form-control form-control-sm bg-light" type="number" placeholder="Enter days..." onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold text-secondary mb-1">Supplier Score (0.1 - 1.0)</label>
                    <input name="supplier_score" className="form-control form-control-sm bg-light" type="number" step="0.1" onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold text-secondary mb-1">Geopolitical Tension (1-10)</label>
                    <input name="geo_risk" className="form-control form-control-sm bg-light" type="number" onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="small fw-bold text-secondary mb-1">Weather Impact Warning</label>
                    <select name="weather_factor" className="form-select form-select-sm bg-light" onChange={handleChange}>
                      <option value="0">Stable Environment</option>
                      <option value="1">High Alert (Severe)</option>
                    </select>
                  </div>
                  {/* Additional 4 inputs would go here */}
                </div>

                <div className="mt-4 p-3 bg-light rounded border border-dashed text-center">
                  <p className="small text-muted mb-0">Running this simulation will query the FastAPI microservice for a weighted probability score.</p>
                </div>

                <button className="btn btn-primary btn-lg mt-4 w-100 fw-bold shadow" onClick={predict}>
                  EXECUTE AI ANALYSIS <ChevronRight className="ms-2" size={20}/>
                </button>
              </div>
            </div>

            {/* AI Results & Live Feed (Right - 40% wide) */}
            <div className="col-lg-5">
              <div className={`card border-0 shadow-sm p-4 mb-4 text-center transition-all ${result?.risk_level === 'High' ? 'bg-danger text-white' : 'bg-white'}`}>
                <h6 className={result?.risk_level === 'High' ? 'text-white-50' : 'text-muted'}>RISK ASSESSMENT RESULT</h6>
                {result ? (
                  <div className="py-2">
                    <h1 className="display-3 fw-bold m-0">{result.risk_level}</h1>
                    <div className="badge bg-dark px-3 py-2 mt-2">Confidence: {result.confidence_score}%</div>
                    <p className="mt-3 small fw-bold px-3">{result.recommendation}</p>
                  </div>
                ) : (
                  <div className="py-4 text-muted opacity-50 d-flex flex-column align-items-center">
                    <AlertTriangle size={50} className="mb-2"/>
                    <p>Awaiting System Input...</p>
                  </div>
                )}
              </div>

              {/* LIVE TRENDS CHART (Filling more space) */}
              <div className="card border-0 shadow-sm p-3 bg-white" style={{ height: "260px" }}>
                <h6 className="fw-bold mb-3 d-flex align-items-center small"><BarChart3 size={16} className="me-2 text-primary"/> Risk Factor Impact Breakdown</h6>
                <div style={{ height: "180px" }}>
                  <Bar 
                    data={{
                      labels: ["Lead", "Supply", "Geo", "Stockout"],
                      datasets: [{ label: 'Impact', data: [formData.lead_time || 0, 10, formData.geo_risk || 0, 5], backgroundColor: '#0d6efd', borderRadius: 6 }]
                    }} 
                    options={{ maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { display: false }, x: { grid: { display: false } } } }} 
                  />
                </div>
              </div>
            </div>

          </div> {/* End Bento Row */}

          {/* 4. FOOTER / SYSTEM LOGS */}
          <div className="row mt-4">
            <div className="col-12">
               <div className="card border-0 shadow-sm p-3 bg-white">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="m-0 fw-bold small text-muted">Recent System Events</h6>
                    <span className="text-primary small" style={{cursor: 'pointer'}}>View All Logs</span>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-sm table-borderless m-0">
                       <tbody className="small">
                          <tr>
                             <td><span className="text-success fw-bold">INFO</span></td>
                             <td>Model weights updated successfully via Scikit-Learn.</td>
                             <td className="text-muted text-end">2 mins ago</td>
                          </tr>
                          <tr>
                             <td><span className="text-warning fw-bold">WARN</span></td>
                             <td>Lead time variance detected in Rohini-Sonepat route.</td>
                             <td className="text-muted text-end">15 mins ago</td>
                          </tr>
                       </tbody>
                    </table>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

export default Dashboard;