//Pages
import Home from './pages/Home';
import Products from './pages/Products';
//Components
import Header from './components/Header';
//Libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Header />
      <Box>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;