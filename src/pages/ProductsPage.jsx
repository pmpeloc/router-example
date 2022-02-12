import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import './ProductsPage.css';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      'https://api.mercadolibre.com/sites/MLA/search?q=bocajrs'
    );
    const res = await data.json();
    setProducts(res.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='product-list'>
      {products.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <Card product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;
