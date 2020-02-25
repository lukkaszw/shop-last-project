import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePage';
import NotFound from './components/views/NotFound/NotFound';
import Order from './components/views/Order/Order';
import ProductView from './components/views/ProductView/ProductView';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductView} />
          <Route exact path="/order" component={Order} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
