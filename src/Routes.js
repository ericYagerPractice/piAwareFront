import React from 'react';
import { Route, Switch } from 'react-router-dom';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
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

//<Route exact path='/' component={HomePage} />