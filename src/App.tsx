import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import { client } from './service/client';

import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';

import Header from './components/Header';

import store from './store';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
                <Route exact path="/">
                    <Redirect to="/category/clothes" />
                </Route>
                <Route path="/category/:category" component={Category} />
                <Route path="/product" component={Product} />
                <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </ Provider>
    </ApolloProvider>
  );
}

export default App;
