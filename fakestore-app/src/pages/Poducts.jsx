import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import handleAPIError from "../utils/handleAPIError"; // Import the utility

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading to true before the API call
        setError(null); // Reset error state
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message); // Set error message
        handleAPIError(error); // Use the utility function
      } finally {
        setLoading(false); // Set loading to false after the API call
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container products-container">
      <h1 className="products-heading">Our Products</h1>
      {loading ? (
        <p className="loading-text">Loading products...</p>
      ) : error ? (
        <p className="error-text">Error: {error}</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="product-card-body">
                  <h5 className="product-title">
                    {product.title.length > 50
                      ? `${product.title.substring(0, 50)}...`
                      : product.title}
                  </h5>
                  <p className="product-price">${product.price}</p>
                  <p className="product-description">
                    {product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="view-details-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;