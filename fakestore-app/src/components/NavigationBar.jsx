import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import ProductListing from './ProductListing';


function NavigationBar () {
  return (
    <Nav className="flex-column p-3 bg-dark text-white">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/productlisting">Product Listing</Nav.Link>
      <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>

    </Nav>
  );
}

export default NavigationBar;