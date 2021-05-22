import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header'
import './App.css';


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
