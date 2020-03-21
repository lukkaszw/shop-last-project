import React from 'react';

import Header from '../Header/Header';
const Footer = React.lazy(() => import('../Footer/Footer'));

const MainLayout = ({ children }) => {
  return ( 
    <div className="app">
      <Header />
        <main className="container main">
          {children}
        </main>
      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>
    </div>
   );
}
 
export default MainLayout;