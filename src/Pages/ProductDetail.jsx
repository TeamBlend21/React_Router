import { useParams } from 'react-router';
import Navbar from '../Components/Navbar';

const ProductDetail = () => {
    const params = useParams();
  return (
    <div>
        <Navbar />
        <h1>Product Details</h1>
        <p> This Product name is: <b>{params.id}</b></p>
    </div>
  )
};

export default ProductDetail;