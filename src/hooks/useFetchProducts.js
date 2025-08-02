import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => setError('Failed to fetch products'))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;
