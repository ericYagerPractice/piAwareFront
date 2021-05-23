import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header'
import './App.css';
import AWS from 'aws-sdk';
import awsmobile from './aws-exports';

AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: awsmobile.aws_cognito_identity_pool_id,
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

export default App;
