import HomePage from '../pages/HomePage';
import FeaturedPage from '../pages/FeaturedPage';
import DynamitePage from '../pages/DynamitePage';
import PPVPage from '../pages/PPVPage';
import RampagePage from '../pages/RampagePage';

const Routes = [
  { title: 'Home', path: '/', exact: true, key: 'Home', component: HomePage },
  {
    title: 'Featured',
    path: '/featured',
    key: 'Featured',
    component: FeaturedPage,
  },
  {
    title: 'Pay Per View',
    path: '/ppv',
    key: 'Pay Per View',
    component: PPVPage,
  },
  {
    title: 'Dyanmite',
    path: '/dynamite',
    key: 'Dyanmite',
    component: DynamitePage,
  },
  {
    title: 'Rampage',
    path: '/rampage',
    key: 'Rampage',
    component: RampagePage,
  },
];

export default Routes;
