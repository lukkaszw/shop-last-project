import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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