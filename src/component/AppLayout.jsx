import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout(props) {
  const { noFooter, children } = props;
  return (
    <div className='content-wrap h-full overflow-hidden'>
      <Navbar />
      <div className='section-content overflow-auto mt-20 max-h-[calc(100vh_-_80px)]'>{children}</div>
      {!noFooter && <Footer />}
    </div>
  );
}
