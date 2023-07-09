import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';
import Banner from '../component/Banner';
import SectionAbout from '../component/section/About';
import SectionPortfolio from '../component/section/Portfolio';
import SectionProcess from '../component/section/Process';
import SectionContact from '../component/section/Contact';
import { portfoliosHome } from '../assets/data/portfolio/portfolio';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout noFooter>
      <Banner />
      <div className='container'>
        <SectionAbout />
        <SectionPortfolio data={portfoliosHome} canSeeMore />
        <SectionProcess />
        <SectionContact />
      </div>
    </AppLayout>
  );
}
