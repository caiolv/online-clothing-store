import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Category from './pages/Category';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Category} />
    </BrowserRouter>
  );
}

export default App;
