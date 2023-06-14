import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='card mt-10'>Portfolio</div>
      </div>
    </AppLayout>
  );
}
