import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      id: "ai-supply-chain",
      title: "How AI is Transforming Supply Chains",
      desc: "Explore how AI improves forecasting and logistics.",
    },
    {
      id: "supply-risks",
      title: "Top Supply Chain Risks in 2026",
      desc: "Understand key risks affecting modern supply chains.",
    },
    {
      id: "demand-forecasting",
      title: "Demand Forecasting Using Machine Learning",
      desc: "Learn how ML predicts demand patterns.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">
          Supply Chain Insights
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id}>
              <div className="bg-white p-6 rounded shadow hover:shadow-lg cursor-pointer">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;