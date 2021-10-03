import Spinner from 'components/Spinner';
import ArticalPage from 'pages/ArticalPage';
import Home from 'pages/Home';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const LoginRoute = lazy(() => import('pages/Login'));

const routeItems = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: LoginRoute,
    exact: false,
  },
  {
    path: '/article/:articleId',
    component: ArticalPage,
    exact: false,
  },
];

const renderRouteItems = () =>
  routeItems.map(({ path, component, exact }) => (
    <Route key={path} exact={exact} path={path} component={component} />
  ));

const router = () => (
  <Suspense fallback={<Spinner variant='big' />}>
    <Router>
      <Switch>{renderRouteItems()}</Switch>
    </Router>
  </Suspense>
);

export default router;
