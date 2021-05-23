import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Map from './pages/Map'
import MapReactGL from './pages/MapReactGL'


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/map' component={Map} />
        <Route exact path="/mapReactGL" component={MapReactGL} />
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