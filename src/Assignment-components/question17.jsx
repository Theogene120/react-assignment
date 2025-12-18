import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // get URL parameter

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProductDetails;
