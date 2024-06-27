import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerAccount = () => {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({ username: '', customer_id: '' });

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/customer_accounts');
      setAccounts(response.data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post('http://localhost:5000/customer_accounts', newAccount);
      setAccounts([...accounts, response.data]);
      setNewAccount({ username: '', customer_id: '' });
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAccount({ ...newAccount, [name]: value });
  };

  return (
    <div>
      <h2>Customer Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.username} - Customer ID: {account.customer_id}</li>
        ))}
      </ul>
      <h3>Add New Customer Account</h3>
      <input type="text" name="username" placeholder="Username" value={newAccount.username} onChange={handleChange} />
      <input type="text" name="customer_id" placeholder="Customer ID" value={newAccount.customer_id} onChange={handleChange} />
      <button onClick={handleCreateAccount}>Create Customer Account</button>
    </div>
  );
};

export default CustomerAccount;
