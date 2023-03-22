import React from 'react';
import {Navigate,Route} from 'react-router-dom';
import { checkCookie } from '../utils/cookies';

const PrivateRoute=({element,...rest})=>{
    <Route { ...rest } render={props => (
        checkCookie() !== null ? (
          <element { ...props } />
        ) : (
          <Navigate to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      )} />
}

export default PrivateRoute;