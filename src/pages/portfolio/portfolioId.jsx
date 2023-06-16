import { useEffect } from 'react';
import AppLayout from '../../component/AppLayout';

export default function PortfolioId() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='pt-10'>under construction</div>
      </div>
    </AppLayout>
  );
}
