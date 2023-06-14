import Home from '../pages';
import About from '../pages/about';
import Portfolio from '../pages/portfolio';
import Process from '../pages/process';
import Contact from '../pages/contact';

export const routeName = {
  home: '/',
  about: '/about',
  portfolio: '/portfolio',
  precess: '/process',
  contact: '/contacts',
};

export const router = [
  {
    name: 'Home',
    path: routeName.home,
    element: <Home />,
  },
  {
    name: 'About Us',
    path: routeName.about,
    element: <About />,
  },
  {
    name: 'Portfolio',
    path: routeName.portfolio,
    element: <Portfolio />,
  },
  {
    name: 'Process',
    path: routeName.precess,
    element: <Process />,
  },
  {
    name: 'Contacts',
    path: routeName.contact,
    element: <Contact />,
  },
];
