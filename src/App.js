//Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import OrderTracking from './pages/OrderTracking';
import Login from './pages/Login';
import ShoppingCart from './pages/ShoppingCart';
//Components
import Header from './components/Header';
//Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/product/:id' element={<Product />} />
        <Route exact path='/order-tracking' element={<OrderTracking />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;