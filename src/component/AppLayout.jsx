import React from 'react';
import SiteFooter from './SiteFooter';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout(props) {
  const { noFooter, children } = props;
  return (
    <div className='content-wrap'>
      <Navbar />
      <div className='section-content'>
        {children}
        {!noFooter && <Footer />}
      </div>
      <SiteFooter />
    </div>
  );
}
