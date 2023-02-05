import HomePage from '../pages/HomePage';
import FeaturedPage from '../pages/FeaturedPage';
import DynamiteView from '../pages/DynamitePage';

const Routes = [
  { title: 'Home', path: '/', exact: true, key: 'Home', component: HomePage },
  {
    title: 'Featured',
    path: '/featured',
    key: 'Featured',
    component: FeaturedPage,
  },
  {
    title: 'Dyanmite',
    path: '/dynamite',
    key: 'Dyanmite',
    component: DynamiteView,
  },
];

export default Routes;
