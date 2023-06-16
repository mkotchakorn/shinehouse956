import { useEffect } from 'react';
import AppLayout from '../../component/AppLayout';
import SectionPortfolio from '../../component/section/Portfolio';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='pt-10'>
          <SectionPortfolio canGotoContact />
        </div>
      </div>
    </AppLayout>
  );
}
