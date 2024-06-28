import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone_number: '' });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleCreateCustomer = async () => {
    try {
      const response = await axios.post('http://localhost:5000/customers', newCustomer);
      setCustomers([...customers, response.data]);
      setNewCustomer({ name: '', email: '', phone_number: '' });
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name} - {customer.email}</li>
        ))}
      </ul>
      <h3>Add New Customer</h3>
      <input type="text" name="name" placeholder="Name" value={newCustomer.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={newCustomer.email} onChange={handleChange} />
      <input type="text" name="phone_number" placeholder="Phone Number" value={newCustomer.phone_number} onChange={handleChange} />
      <button onClick={handleCreateCustomer}>Create Customer</button>
    </div>
  );
};

export default Customer;
