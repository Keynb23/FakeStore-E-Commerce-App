import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import ProductDetail from './pages/ProductDetails';
import Products from './pages/Poducts';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductListing from './components/ProductListing';

const App = () => {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
};

export default App;
