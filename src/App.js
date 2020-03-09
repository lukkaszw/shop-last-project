import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage/HomePage.container';
import NotFound from './components/views/NotFound/NotFound';
import Order from './components/views/Order/Order.container';
import ProductView from './components/views/ProductView/ProductView.container';
import Cart from './components/views/Cart/Cart.container';
import CartInStorage from './components/features/CartInStorage/CartInStorage.container';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
     
        <CartInStorage>
        <MainLayout>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/product/:id" component={ProductView} />
                  <Route exact path="/cart" component={Cart} />
                  <Route exact path="/order" component={Order} />
                  <Route path='*' component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
           
            )} />
          </MainLayout>
      </CartInStorage>
    </BrowserRouter>
  );
}

export default App;
