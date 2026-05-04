import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const blogData = {
  "ai-supply-chain": {
    title: "How AI is Transforming Supply Chains",
    content: `
Artificial Intelligence is revolutionizing supply chains by enabling predictive analytics and automation.

AI helps organizations forecast demand accurately using historical data. This reduces overstocking and understocking issues.

Machine learning models can detect anomalies in supply patterns and identify risks before they occur.

Additionally, AI improves logistics by optimizing delivery routes and reducing transportation costs.

Overall, AI enables smarter, faster, and more efficient supply chain management.
    `,
  },

  "supply-risks": {
    title: "Top Supply Chain Risks in 2026",
    content: `
Supply chains today face multiple risks due to globalization and complexity.

Key risks include supplier delays, demand fluctuations, geopolitical instability, and lack of real-time visibility.

Natural disasters and pandemics also disrupt supply chains significantly.

Organizations must adopt digital tools and predictive systems to mitigate these risks.

Risk management strategies are essential for ensuring resilience and continuity.
    `,
  },

  "demand-forecasting": {
    title: "Demand Forecasting Using Machine Learning",
    content: `
Demand forecasting is crucial for efficient supply chain management.

Machine learning models analyze historical sales data to predict future demand trends.

Algorithms like regression and time-series models improve accuracy compared to traditional methods.

Accurate forecasting helps businesses optimize inventory levels and reduce costs.

This leads to better customer satisfaction and operational efficiency.
    `,
  },
};

function BlogDetails() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <>
      <Navbar />
      <div className="p-10 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-700 whitespace-pre-line">
          {blog.content}
        </p>
      </div>
    </>
  );
}

export default BlogDetails;