import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { 
  Box, 
  Mail, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Zap 
} from "lucide-react";
import PageTransition from "../components/PageTransition";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid Credentials - Please check your email and password.");
    }
  };

  return (
    <PageTransition>
      <div className="split-screen-container">
        
        {/* --- LEFT SIDE: THE "DENSITY" PANEL --- */}
        <div className="visual-side d-none d-lg-flex">
          <div style={{ maxWidth: "500px" }}>
            <div className="badge bg-primary mb-3 px-3 py-2 shadow-sm">
              <Zap size={14} className="me-2" /> 
              v2.1 Predictive Engine Active
            </div>
            <h1 className="display-3 fw-bold mb-4">
              Intelligence Behind <br /> 
              <span className="text-primary">Global Logistics.</span>
            </h1>
            <p className="lead text-white-50 mb-5">
              SupplySense utilizes Ensemble Random Forest models to predict 
              tier-1 disruptions before they impact your operational bottom line.
            </p>

            {/* Feature Highlights to fill space */}
            <div className="row g-4">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="bg-white bg-opacity-10 p-2 rounded me-3">
                    <ShieldCheck size={24} className="text-primary" />
                  </div>
                  <span className="small fw-bold">XAI Transparency</span>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <div className="bg-white bg-opacity-10 p-2 rounded me-3">
                    <Globe size={24} className="text-primary" />
                  </div>
                  <span className="small fw-bold">Geo-Risk Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE FORM PANEL --- */}
        <div className="form-side shadow-lg">
          <div className="mb-5">
            <div className="d-flex align-items-center text-primary fw-bold fs-4 mb-4">
              <Box className="me-2" size={28} /> SupplySense
            </div>
            <h2 className="fw-bold text-dark">Welcome back</h2>
            <p className="text-muted">Enter your credentials to access the command center.</p>
          </div>

          <form onSubmit={submit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary">Work Email</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Mail size={18} className="text-muted" />
                </span>
                <input 
                  type="email" 
                  className="form-control bg-light border-start-0" 
                  placeholder="ayush@srmuniversity.ac.in"
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <label className="form-label small fw-bold text-secondary">Password</label>
                <a href="#" className="small text-decoration-none text-primary fw-bold">Forgot?</a>
              </div>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Lock size={18} className="text-muted" />
                </span>
                <input 
                  type="password" 
                  className="form-control bg-light border-start-0" 
                  placeholder="••••••••"
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center shadow"
            >
              Authorize Access <ArrowRight className="ms-2" size={18} />
            </button>
          </form>

          {/* Bottom Footer */}
          <div className="mt-auto pt-5 text-center">
            <p className="small text-muted">
              New to the platform?{" "}
              <Link to="/register" className="text-primary fw-bold text-decoration-none">
                Request an account
              </Link>
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <span className="badge bg-light text-dark border small">v2.1.0</span>
              <span className="badge bg-light text-dark border small">System: Stable</span>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}

export default Login;