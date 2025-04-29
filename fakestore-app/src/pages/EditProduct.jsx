import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import handleAPIError from '../utils/handleAPIError'; // Import the utility

function EditProduct({ product, onSave }) {
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true); // Set loading to true
      const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: name, price })
      });
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      onSave();
      navigate('/products');
    } catch (error) {
      handleAPIError(error); // Use the utility function
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div className="edit-product-card">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading} // Disable input during loading
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            id="productPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            disabled={loading} // Disable input during loading
          />
        </div>
        <div className="edit-product-buttons">
          <button type="submit" className="save-btn" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
          <Link to="/products" className="cancel-btn">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;