import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCreateProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({ name: '', price: '', stock: '' });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - Price: ${product.price} - Stock: {product.stock}</li>
        ))}
      </ul>
      <h3>Add New Product</h3>
      <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} />
      <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleChange} />
      <button onClick={handleCreateProduct}>Create Product</button>
    </div>
  );
};

export default Product;
