import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header'
import './App.css';
import awsmobile from './aws-exports';
import Amplify from '@aws-amplify/core';
import React from 'react'
import { Auth } from '@aws-amplify/auth'
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers';
import { withAuthenticator } from 'aws-amplify-react'; 
import PiClient from './components/piData'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


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
        <Container className="p-4">
          <Row className="p-3 justify-content-md-center">
            <Col md="auto"> <PiClient name="Air Temp" unit="°F"/> </Col>
            <Col md="auto"> <PiClient name="Humidity" unit="%"/> </Col>
          </Row>
        </Container>
        <Header />
        <main >
        <Routes />
        </main>
      </div>
    </Router>
  );
}

export default withAuthenticator(App, true);

/*
"us-east-1:e2e82b58-4963-46a8-9938-e7d8329f2f9a"

aws iot attach-principal-policy --policy-name 'piAwarePolicy' --principal 'us-east-1:e2e82b58-4963-46a8-9938-e7d8329f2f9a'
*/
