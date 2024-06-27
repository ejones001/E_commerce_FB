import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Customer from './customer';
import CustomerAccount from './CustomerAccount';
import Product from './product';
import Order from './order';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/customer-accounts">Customer Accounts</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/customers">
            <Customer />
          </Route>
          <Route path="/customer-accounts">
            <CustomerAccount />
          </Route>
          <Route path="/products">
            <Product />
          </Route>
          <Route path="/orders">
            <Order />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
