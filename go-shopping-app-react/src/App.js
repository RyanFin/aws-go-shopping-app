import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // const fetchData = async () => {
  //   const res = await fetch('https://6j4fjl5ku2.execute-api.us-east-1.amazonaws.com/Dev/GoShoppingApplicationFunction')
  //   const json = await res.json()
  //   return json.result
  // }

  // const ProductList = props => {
  //   const [products, setProducts] = useState([])

  //   useEffect(() => {
  //     fetchData().then(products => {
  //       setProducts(products)
  //     })
  //   }, [])

    return (
      <div className="container">
        <Header></Header>
        <Product></Product>
      </div>
    );
  }

export default App;


