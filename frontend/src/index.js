import ReactDOM from 'react-dom/client';
import App from './App';

// 1. Bootstrap MUST come first
import 'bootstrap/dist/css/bootstrap.min.css'; 

// 2. Your professional styles MUST come last to override Bootstrap
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);