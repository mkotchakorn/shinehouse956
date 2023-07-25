import { useEffect } from 'react';
import AppLayout from '../component/AppLayout';
import SectionAbout from '../component/section/About';
import { routeName } from '../routes/routes';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='pt-10'>
          <SectionAbout onContact={() => window.location.href = routeName.contact} />
        </div>
      </div>
    </AppLayout>
  );
}
