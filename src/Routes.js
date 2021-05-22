import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Map from './pages/Map'


class Routes extends React.Component {
  render() {
    return (
      <Switch>
          <Route exact path='/map' component={Map} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  } 
}

export default Routes;