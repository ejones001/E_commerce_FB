import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ customer_id: '' });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/orders', newOrder);
      setOrders([...orders, response.data]);
      setNewOrder({ customer_id: '' });
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>Order ID: {order.id} - Customer ID: {order.customer_id}</li>
        ))}
      </ul>
      <h3>Place New Order</h3>
      <input type="text" name="customer_id" placeholder="Customer ID" value={newOrder.customer_id} onChange={handleChange} />
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Order;
