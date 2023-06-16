import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';
import Banner from '../component/Banner';
import SectionAbout from '../component/section/About';
import SectionPortfolio from '../component/section/Portfolio';
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
        <SectionPortfolio canSeeMore show={8} />
        <div className='card'>under construction</div>
        <SectionContact />
      </div>
    </AppLayout>
  );
}
