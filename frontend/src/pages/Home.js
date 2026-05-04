import { Link } from "react-router-dom";
import { 
  Box, ArrowRight, ShieldCheck, BarChart, 
  Globe, Cpu, Zap, Layers 
} from "lucide-react";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
    <PageTransition>
      <div className="landing-page" style={{ backgroundColor: "#f0f2f5" }}>
        
        {/* --- HERO SECTION --- */}
        <section className="hero-section text-center py-5" style={{ 
          background: "linear-gradient(135deg, #0d6efd 0%, #003d99 100%)", 
          color: "white", 
          padding: "100px 20px" 
        }}>
          <div className="container">
            <div className="badge bg-white text-primary mb-3 px-3 py-2 fw-bold shadow-sm">
              <Cpu size={16} className="me-2"/> Next-Gen Logistics AI
            </div>
            <h1 className="display-2 fw-bold mb-4">SupplySense AI</h1>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: "700px", opacity: 0.9 }}>
              The enterprise-grade platform for predictive supply chain risk management. 
              Powered by Random Forest ensembles and Explainable AI (XAI) to ensure 
              your global operations never stop.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/login" className="btn btn-light btn-lg px-5 py-3 fw-bold text-primary shadow">
                Launch Platform <ArrowRight className="ms-2" />
              </Link>
              <Link to="/register" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                Request Access
              </Link>
            </div>
          </div>
        </section>

        {/* --- FEATURE BENTO GRID (The "Fullness" Fix) --- */}
        <section className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Intelligent Capabilities</h2>
            <p className="text-muted">Advanced machine learning modules for tier-1 resilience.</p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-circle mb-4" style={{ width: "fit-content" }}>
                  <ShieldCheck size={32} className="text-primary" />
                </div>
                <h5 className="fw-bold">Explainable AI (XAI)</h5>
                <p className="text-muted small">No more black boxes. Every risk score is backed by SHAP-value transparency for audit-ready insights.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="bg-success bg-opacity-10 p-3 rounded-circle mb-4" style={{ width: "fit-content" }}>
                  <Zap size={32} className="text-success" />
                </div>
                <h5 className="fw-bold">Real-time Inference</h5>
                <p className="text-muted small">Utilizing a FastAPI microservice for sub-millisecond risk prediction on global shipping routes.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="bg-warning bg-opacity-10 p-3 rounded-circle mb-4" style={{ width: "fit-content" }}>
                  <Globe size={32} className="text-warning" />
                </div>
                <h5 className="fw-bold">Geopolitical Risk</h5>
                <p className="text-muted small">Integrating external risk indices to model disruptions across volatile international borders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- STATISTICS/LOGIC BAR --- */}
        <section className="bg-white py-5 border-top border-bottom">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md-3">
                <h2 className="fw-bold text-primary mb-0">98%</h2>
                <small className="text-muted fw-bold uppercase">MODEL ACCURACY</small>
              </div>
              <div className="col-md-3">
                <h2 className="fw-bold text-primary mb-0">8+</h2>
                <small className="text-muted fw-bold uppercase">RISK FACTORS</small>
              </div>
              <div className="col-md-3">
                <h2 className="fw-bold text-primary mb-0">MERN</h2>
                <small className="text-muted fw-bold uppercase">ARCHITECTURE</small>
              </div>
              <div className="col-md-3">
                <h2 className="fw-bold text-primary mb-0">XAI</h2>
                <small className="text-muted fw-bold uppercase">TRANSPARENCY</small>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-5 text-center bg-dark text-white-50">
          <p className="mb-0 small">© 2026 SupplySense Platform | SRM University Delhi-NCR Final Project</p>
        </footer>
      </div>
    </PageTransition>
  );
}

export default Home;