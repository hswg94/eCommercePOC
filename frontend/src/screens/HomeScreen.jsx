import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(()=> {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProductsData(data);
    };

    fetchProducts();
  }, [])


  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {productsData.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
