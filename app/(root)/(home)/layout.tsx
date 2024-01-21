import Footer from '@/public/components/Footer';
import Header from '@/public/components/Header';
import React, { ReactNode } from 'react';

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;
