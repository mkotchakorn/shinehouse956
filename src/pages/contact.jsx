import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';
import SectionContact from '../component/section/Contact';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout noFooter>
      <div className='container'>
        <div className='mt-10'>
          <SectionContact />
        </div>
      </div>
    </AppLayout>
  );
}
