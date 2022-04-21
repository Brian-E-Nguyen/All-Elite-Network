import { Route, Switch } from 'react-router-dom';
import ROUTES from './Routes';
import { useLocation } from 'react-router-dom';

const RenderRoutes = () => {
  const location = useLocation();
  return (
    <Switch location={location} key={location.pathname}>
      {ROUTES.map((route) => (
        <Route
          path={route.path}
          key={route.key}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default RenderRoutes;
