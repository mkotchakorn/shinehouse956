import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../component/AppLayout';
import SectionAbout from '../component/section/About';
import { routeName } from '../routes/routes';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout>
      <div className='container'>
        <div className='pt-10'>
          <SectionAbout onContact={() => navigate(routeName.contact)} />
        </div>
      </div>
    </AppLayout>
  );
}
