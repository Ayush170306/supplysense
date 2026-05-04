import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">SupplySense</h1>

      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;