import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchSalesData();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSalesData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/sales');
      setSalesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Sales Data</h2>
        <p>Today: {salesData.today}</p>
        <p>This Week: {salesData.thisWeek}</p>
        <p>This Month: {salesData.thisMonth}</p>
        <p>This Year: {salesData.thisYear}</p>
        <p>Lifetime: {salesData.lifetime}</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
