import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header'
import './App.css';
import awsmobile from './aws-exports';
import Amplify from '@aws-amplify/core';
import React from 'react'
import { Auth } from '@aws-amplify/auth'
import { withAuthenticator } from 'aws-amplify-react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


Amplify.configure(awsmobile);
Auth.configure();

//Auth.currentCredentials().then(creds => console.log(creds));

Auth.currentCredentials().then((info) => {
  console.log(info);
});

function App() {

  return (
    <Router>
      <div>
        <Header />
        <main >
        <Routes />
        </main>
      </div>
    </Router>
  );
}

export default withAuthenticator(App, false);

/*
"us-east-1:e2e82b58-4963-46a8-9938-e7d8329f2f9a"

aws iot attach-principal-policy --policy-name 'piAwarePolicy' --principal 'us-east-1:e2e82b58-4963-46a8-9938-e7d8329f2f9a'
*/
