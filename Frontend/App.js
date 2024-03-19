import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import ProductPage from './components/ProductPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import ProfilePage from './components/ProfilePage';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/admin/dashboard" component={AdminDashboard} />
        <Route exact path="/products" component={ProductPage} />
        <Route path="/products/:id" component={ProductDetailsPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/payment" component={PaymentPage} />
      </Switch>
    </Router>
  );
}

export default App;
