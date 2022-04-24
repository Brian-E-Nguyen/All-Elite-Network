import Home from '../views/Home';
import PPV from '../views/PPV';
import Dynamite from '../views/Dynamite';
const ROUTES = [
  { title: 'Featured', path: '/', exact: true, key: 'Home', component: Home },
  { title: 'Pay-Per View', path: '/payperview', key: 'PPV', component: PPV },
  {
    title: 'Dynamite',
    path: '/dynamite',
    key: 'Dynamite',
    component: Dynamite,
  },
  { title: 'Rampage', path: '/rampage', key: 'Rampage' },
  { title: 'Dark', path: '/dark', key: 'Dark' },
  { title: 'Dark Elevation', path: '/darkelevation', key: 'Dark Elevation' },
];

export default ROUTES;
