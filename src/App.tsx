import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Category from './pages/Category';
import Product from './pages/Product';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Category} />
      <Route path="/product" component={Product} />
    </BrowserRouter>
  );
}

export default App;
