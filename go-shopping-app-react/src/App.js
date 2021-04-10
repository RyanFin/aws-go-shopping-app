import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Product from './components/Product'
import Settings from './components/Settings'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
      <Router>
      <>
        <Header></Header>
        <div className="container">
        
        <Route path="/" exact render={(props) => (
          <>
          <Product></Product>
          </>
        )}/>
        <Route path='/settings' component={Settings}/>
        </div>
      </>
      </Router>
    );
  }

export default App;


