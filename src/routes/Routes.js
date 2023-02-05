import HomeView from '../views/HomeView';
import FeaturedView from '../views/FeaturedView';
import DynamiteView from '../views/DynamiteView';

const Routes = [
  { title: 'Home', path: '/', exact: true, key: 'Home', component: HomeView },
  {
    title: 'Featured',
    path: '/featured',
    key: 'Featured',
    component: FeaturedView,
  },
  {
    title: 'Dyanmite',
    path: '/dynamite',
    key: 'Dyanmite',
    component: DynamiteView,
  },
];

export default Routes;
