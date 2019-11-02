import React from 'react';
import { Route, Redircet } from 'react-router-dom';

function ProtectedRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route>
      {...rest}
      render=
      {renderProps => {
        if (localStorage.getItem('token')) {
          return <Component {...renderProps} />;
        } else {
          return <Redirect to='/login' />;
        }
      }}
    </Route>
  );
}

export default ProtectedRoute;
