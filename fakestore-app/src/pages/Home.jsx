import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1 style={{ color: '#E3D26F' }}>Welcome to the FakeStore!</h1>
      <p style={{ color: '#7EBDC2' }}>
        Browse our amazing collection of products, updated in real time from the FakeStoreAPI.
      </p>
      <Button
        variant="primary"
        onClick={() => navigate('/products')}
        style={{ marginTop: '20px' }}
      >
        View Products
      </Button>
    </Container>
  );
};

export default Home;
