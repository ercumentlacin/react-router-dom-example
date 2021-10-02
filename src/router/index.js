import ArticalPage from 'pages/ArticalPage';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const routeItems = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
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
  <Router>
    <Switch>{renderRouteItems()}</Switch>
  </Router>
);

export default router;
