import Home from '../pages';
import About from '../pages/about';
import Portfolio from '../pages/portfolio/portfolio';
import Process from '../pages/process';
import Contact from '../pages/contact';
import PortfolioId from '../pages/portfolio/portfolioId';

export const routeName = {
  home: '/',
  about: '/about',
  portfolio: '/portfolio',
  process: '/process',
  contact: '/contacts',
};

export const router = [
  {
    name: 'Home',
    path: routeName.home,
    element: <Home />,
    show: true,
  },
  {
    name: 'About Us',
    path: routeName.about,
    element: <About />,
    show: true,
  },
  {
    name: 'Portfolio',
    path: routeName.portfolio,
    element: <Portfolio />,
    show: true,
  },
  {
    name: 'Portfolio',
    path: `${routeName.portfolio}/:type/:id`,
    element: <PortfolioId />,
    show: false,
  },
  {
    name: 'Process',
    path: routeName.process,
    element: <Process />,
    show: true,
  },
  {
    name: 'Contacts',
    path: routeName.contact,
    element: <Contact />,
    show: true,
  },
];
