import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
  return ( 
    <div className="app">
      <Header />
        <main className="container main">
          {children}
        </main>
      <Footer />
    </div>
   );
}
 
export default MainLayout;