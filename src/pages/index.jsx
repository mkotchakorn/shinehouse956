import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';
import Banner from '../component/Banner';
import SectionAbout from '../component/section/About';
import SectionContact from '../component/section/Contact';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout noFooter>
      <Banner />
      <div className='container'>
        <SectionAbout />

        <div className='card'>portfolio</div>

        <div className='card'>process</div>

        <SectionContact />
      </div>
    </AppLayout>
  );
}
