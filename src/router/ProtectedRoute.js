import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import users from 'data/users';
import { localStorageGetter } from 'utils';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const storageUser = localStorageGetter('user');
  const isRestrictedUser = users.some(
    (user) =>
      user.email === storageUser?.email &&
      user.password === storageUser?.password
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        isRestrictedUser ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default ProtectedRoute;
