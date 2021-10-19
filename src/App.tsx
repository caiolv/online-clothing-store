import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from './service/client';

import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';

import Header from './components/Header';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        <Switch>
              <Route path="/" exact component={Category} />
              <Route path="/category/:category" component={Category} />
              <Route path="/product" component={Product} />
              <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
