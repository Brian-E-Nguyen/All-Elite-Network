import HomeView from '../views/HomeView';
import FeaturedView from '../views/FeaturedView';

const Routes = [
  { title: 'Home', path: '/', exact: true, key: 'Home', component: HomeView },
  {
    title: 'Featured',
    path: '/featured',
    key: 'Featured',
    component: FeaturedView,
  },
];

export default Routes;
