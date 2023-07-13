import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';
import Banner from '../component/Banner';
import SectionAbout from '../component/section/About';
import SectionProcess from '../component/section/Process';
import SectionContact from '../component/section/Contact';
import PortfolioPreview from './portfolio/portfolioPreview';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout noFooter>
      {/* <Banner /> */}
      <div className='container'>
        <SectionAbout />
        <PortfolioPreview />
        <SectionProcess />
        <SectionContact />
      </div>
    </AppLayout>
  );
}
