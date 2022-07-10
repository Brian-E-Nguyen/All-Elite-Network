import Landing from '../views/Landing';
import Featured from '../views/Featured';
import PPV from '../views/PPV';
import Dynamite from '../views/Dynamite';
import Rampage from '../views/Rampage';
import Dark from '../views/Dark';
import DarkElevation from '../views/DarkElevation';

const ROUTES = [
  {
    title: 'Landing',
    path: '/',
    exact: true,
    key: 'Landing',
    component: Landing,
  },
  {
    title: 'Featured',
    path: '/featured',
    key: 'Featured',
    component: Featured,
  },
  { title: 'Pay-Per View', path: '/payperview', key: 'PPV', component: PPV },
  {
    title: 'Dynamite',
    path: '/dynamite',
    key: 'Dynamite',
    component: Dynamite,
  },
  { title: 'Rampage', path: '/rampage', key: 'Rampage', component: Rampage },
  { title: 'Dark', path: '/dark', key: 'Dark', component: Dark },
  {
    title: 'Dark Elevation',
    path: '/darkelevation',
    key: 'Dark Elevation',
    component: DarkElevation,
  },
];

export default ROUTES;
