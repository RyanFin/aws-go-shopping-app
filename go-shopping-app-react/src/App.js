import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
      <>
        <Header></Header>
        <div className="container">
        <Product></Product>
        </div>
      </>
    );
  }

export default App;


