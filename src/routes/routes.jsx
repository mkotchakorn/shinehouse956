import Home from '../pages';
import About from '../pages/about';
import Portfolio from '../pages/portfolio';
import Process from '../pages/process';
import Contact from '../pages/contact';

export const router = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'About Us',
    path: '/about',
    element: <About />,
  },
  {
    name: 'Portfolio',
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    name: 'Process',
    path: '/process',
    element: <Process />,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    element: <Contact />,
  },
];
