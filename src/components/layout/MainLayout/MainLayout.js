import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollUpBtn from '../ScrollUpBtn/ScrollUpBtn';

const MainLayout = ({ children }) => {
  return ( 
    <div className="app">
      <Header />
      <ScrollUpBtn />
        <main className="container main">
          {children}
        </main>
        <ScrollUpBtn />
      <Footer />
    </div>
   );
}
 
export default MainLayout;