import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout(props) {
  const { noFooter, children } = props;
  return (
    <div className='content-wrap min-h-screen pb-8'>
      <Navbar />
      <div className='section-content pt-20'>{children}</div>
      {!noFooter && <Footer />}
    </div>
  );
}
