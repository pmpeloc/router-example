import { useState, useEffect } from 'react';
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
        <Card product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
