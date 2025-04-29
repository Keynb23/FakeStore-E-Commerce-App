import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import handleAPIError from '../utils/handleAPIError'; // Import the utility

function DeleteProduct({ productId }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state

  const deleteProduct = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        setLoading(true); // Set loading to true
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        alert('Product deleted successfully');
        navigate('/products');
      } catch (error) {
        handleAPIError(error); // Use the utility function
      } finally {
        setLoading(false); // Set loading to false
      }
    }
  };

  return (
    <button onClick={deleteProduct} className="delete-btn" disabled={loading}>
      {loading ? "Deleting..." : "Delete Product"}
    </button>
  );
}

export default DeleteProduct;