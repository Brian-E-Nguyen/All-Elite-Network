import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Routes from './Routes';

export default function RenderRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {Routes.map((route) => (
          <Route
            path={route.path}
            key={route.key}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </AnimatePresence>
  );
}
