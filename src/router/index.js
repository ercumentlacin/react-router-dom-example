import Spinner from 'components/Spinner';
import ArticalPage from 'pages/ArticalPage';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const LoginRoute = lazy(() => import('pages/Login'));
const NotFoundPage = lazy(() => import('pages/NotFound'));
const HomePage = lazy(() => import('pages/Home'));

const routeItems = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },

  {
    path: '/article/:articleId',
    component: ArticalPage,
    exact: false,
  },
  {
    path: '*',
    component: NotFoundPage,
    exact: true,
  },
];

const renderRouteItems = () =>
  routeItems.map(({ path, component, exact }) => (
    <ProtectedRoute
      key={path || 'NotFound'}
      exact={exact}
      path={path}
      component={component}
    />
  ));

const router = () => (
  <Suspense fallback={<Spinner variant='big' />}>
    <Router>
      <Switch>
        <Route path='/login' component={LoginRoute} />
        {renderRouteItems()}
      </Switch>
    </Router>
  </Suspense>
);

export default router;
