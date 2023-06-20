import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';
import SectionProcess from '../component/section/Process';

export default function Process() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='pt-10'>
          <SectionProcess canGotoContact />
        </div>
      </div>
    </AppLayout>
  );
}
