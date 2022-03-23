//Pages
import Home from './pages/Home';
import Products from './pages/Products';
import OrderTracking from './pages/OrderTracking';
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
        <Route exact path='/order-tracking' element={<OrderTracking />} />
      </Routes>
    </Router>
  );
}

export default App;