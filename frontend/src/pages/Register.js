import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { 
  Box, 
  Mail, 
  Lock, 
  UserPlus, 
  CheckCircle, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import PageTransition from "../components/PageTransition";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", { 
        email, 
        password,
        name: fullName 
      });
      alert("Account created successfully! Please sign in.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. This email might already be in use.");
    }
  };

  return (
    <PageTransition>
      <div className="split-screen-container">
        
        {/* --- LEFT PANEL: VALUE PROPOSITION (Density Fix) --- */}
        <div className="visual-side d-none d-lg-flex" style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1494412574743-019485b78287?auto=format&fit=crop&w=1350&q=80')" 
        }}>
          <div style={{ maxWidth: "550px" }}>
            <div className="badge bg-success mb-3 px-3 py-2 shadow-sm">
              <ShieldCheck size={14} className="me-2" /> 
              Enterprise-Grade Security
            </div>
            <h1 className="display-4 fw-bold mb-4 text-white">
              Join the Future of <br /> 
              <span className="text-primary">Supply Intelligence.</span>
            </h1>
            <p className="lead text-white-50 mb-5">
              Create an account to access predictive analytics, real-time 
              disruption monitoring, and AI-driven supply chain optimization.
            </p>

            {/* List of features to fill vertical space */}
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-4 text-white">
                <div className="bg-primary p-2 rounded-circle me-3">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Advanced ML Models</h6>
                  <small className="text-white-50">Access Random Forest and XGBoost risk classifiers.</small>
                </div>
              </li>
              <li className="d-flex align-items-center mb-4 text-white">
                <div className="bg-primary p-2 rounded-circle me-3">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">XAI Dashboards</h6>
                  <small className="text-white-50">Interpret AI decisions with SHAP-value transparency.</small>
                </div>
              </li>
              <li className="d-flex align-items-center text-white">
                <div className="bg-primary p-2 rounded-circle me-3">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Global Geo-Risk Tracking</h6>
                  <small className="text-white-50">Monitor geopolitical stability across all trade routes.</small>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- RIGHT PANEL: REGISTRATION FORM --- */}
        <div className="form-side shadow-lg">
          <div className="mb-5">
            <div className="d-flex align-items-center text-primary fw-bold fs-4 mb-4">
              <Box className="me-2" size={28} /> SupplySense
            </div>
            <h2 className="fw-bold text-dark">Create Account</h2>
            <p className="text-muted">Start your 14-day enterprise trial today.</p>
          </div>

          <form onSubmit={submit}>
            {/* Name Field */}
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">Full Name</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Zap size={18} className="text-muted" />
                </span>
                <input 
                  type="text" 
                  className="form-control bg-light border-start-0" 
                  placeholder="Ayush Aggarwal"
                  onChange={(e) => setFullName(e.target.value)} 
                  required 
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label className="form-label small fw-bold text-secondary">Work Email</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Mail size={18} className="text-muted" />
                </span>
                <input 
                  type="email" 
                  className="form-control bg-light border-start-0" 
                  placeholder="name@company.com"
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary">Create Password</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0">
                  <Lock size={18} className="text-muted" />
                </span>
                <input 
                  type="password" 
                  className="form-control bg-light border-start-0" 
                  placeholder="Choose a strong password"
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-100 py-3 fw-bold d-flex align-items-center justify-content-center shadow"
            >
              Sign Up Now <UserPlus className="ms-2" size={18} />
            </button>
          </form>

          {/* Footer Section */}
          <div className="mt-auto pt-5 text-center">
            <p className="small text-muted">
              Already have an account?{" "}
              <Link to="/login" className="text-primary fw-bold text-decoration-none">
                Sign In
              </Link>
            </p>
            <div className="mt-3 text-muted" style={{ fontSize: "0.7rem" }}>
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}

export default Register;