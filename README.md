# E-Commerce Application

This project is an e-commerce application developed using React for the frontend and Flask for the backend. It allows users to manage customers, customer accounts, products, and orders through a user-friendly interface.

## Features

- **Customer Management:**
  - Create, read, update, and delete customer records.
  - View details of individual customers.

- **Customer Account Management:**
  - Create, read, update, and delete customer accounts.
  - Associate customer accounts with existing customers.

- **Product Management:**
  - Create, read, update, and delete products.
  - View a list of all available products.

- **Order Processing:**
  - Place new orders specifying the customer and products.
  - View order details and order history.
  - Track order status and manage cancellations.

## Technologies Used

- **Frontend:**
  - React.js
  - Axios for API communication
  - React Router for routing

- **Backend:**
  - Flask (Python web framework)
  - SQLAlchemy for database ORM
  - Flask-Marshmallow for serialization

- **Database:**
  - MySQL

## Setup Instructions

1. **Clone the repository:**

2. **Backend Setup:**
- Navigate to the `backend` directory.
- Create a virtual environment (recommended) and activate it.
- Install dependencies:
  ```
  pip install -r requirements.txt
  ```
- Set up your MySQL database and update the connection URI in `app.py`.
- Run the Flask development server:
  ```
  python app.py
  ```

3. **Frontend Setup:**
- Navigate to the `frontend` directory.
- Install dependencies:
  ```
  npm install
  ```
- Start the React development server:
  ```
  npm run dev
  ```
- The frontend should open in your default browser at `http://localhost:3000`.

4. **Use the Application:**
- Open your browser and navigate to `http://localhost:3000` to use the application.
- You can navigate through different sections such as Customers, Customer Accounts, Products, and Orders using the navigation links provided.


