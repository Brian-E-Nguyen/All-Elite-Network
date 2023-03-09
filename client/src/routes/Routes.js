import HomePage from '../views/HomePage';
import FeaturedPage from '../views/FeaturedPage';
import DynamitePage from '../views/DynamitePage';
import PPVPage from '../views/PPVPage';
import Rampage_Page from '../views/Rampage_Page';
import DarkAndDarkElevationPage from '../views/DarkAndDarkElevationPage';
import LoginPage from '../views/LoginPage';
import SignupPage from '../views/SignupPage';
import SettingsPage from '../views/SettingsPage';
import ErrorPage from '../views/ErrorPage';

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
    component: Rampage_Page,
  },
  {
    title: 'Dark and Dark Elevation',
    path: '/dark',
    key: 'Dark and Dark Elevation',
    component: DarkAndDarkElevationPage,
  },
  {
    title: 'Login',
    path: '/login',
    key: 'login',
    component: LoginPage,
  },
  {
    title: 'Sign Up',
    path: '/signup',
    key: 'signup',
    component: SignupPage,
  },
  {
    title: 'Settings',
    path: '/settings',
    key: 'settings',
    component: SettingsPage,
  },

  {
    title: 'Error',
    path: '*',
    key: 'Error',
    component: ErrorPage,
  },
];

export default Routes;
