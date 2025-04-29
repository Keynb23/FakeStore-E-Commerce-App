import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import DeleteProduct from '../functions/DeleteProduct';
import EditProduct from './EditProduct';
import handleAPIError from '../utils/handleAPIError'; // Import the utility

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Set loading to true
        setError(null); // Reset error state
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message); // Set error message
        handleAPIError(error); // Use the utility function
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchProduct();
  }, [id]);

  const handleSave = async () => {
    try {
      setLoading(true); // Set loading to true
      setError(null); // Reset error state
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to refresh product details");
      }
      const data = await response.json();
      setProduct(data);
      setShowEdit(false);
    } catch (error) {
      setError(error.message);
      handleAPIError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      {loading ? (
        <p className="loading-text">Loading product...</p>
      ) : error ? (
        <p className="error-text">Error: {error}</p>
      ) : (
        <Card className="product-detail-card">
          <Card.Img variant="top" src={product.image} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className="price">${product.price}</Card.Text>
            <Card.Text className="description">{product.description}</Card.Text>

            <div className="button-group">
              <Button variant="primary" href="/products" className="back-btn">
                Back to Products
              </Button>
              <Button
                variant="warning"
                onClick={() => setShowEdit(!showEdit)}
                className="edit-toggle-btn"
              >
                {showEdit ? 'Close Edit' : 'Edit Product'}
              </Button>
              <DeleteProduct productId={product.id} />
            </div>

            {showEdit && <EditProduct product={product} onSave={handleSave} />}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default ProductDetail;