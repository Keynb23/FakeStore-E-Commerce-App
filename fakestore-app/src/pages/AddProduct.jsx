import { Link } from "react-router-dom";

function AddProduct () {
    return (
        <div className="container mt-5">
            <h1>Add Product</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Product Description</label>
                    <textarea className="form-control" id="productDescription" rows="3" required></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Product Price</label>
                    <input type="number" className="form-control" id="productPrice" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="Category" className="form-label">Category</label>
                    <input type="text" className="form-control" id="Category" required />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
            <Link to="/products" className="btn btn-secondary mt-3">Back to Products</Link>
        </div>
    );
}
export default AddProduct;