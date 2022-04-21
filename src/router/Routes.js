import Home from '../views/home/Home';
import PPV from '../views/PPV';
const ROUTES = [
  { path: '/', exact: true, key: 'Home', component: Home },
  { path: '/payperview', key: 'PPV', component: PPV },
];

export default ROUTES;
