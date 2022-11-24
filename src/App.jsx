import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/login/Login';

import './App.css'
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <Router className="App">
        
        <Routes>

          
            <Route path='/CupStore' element={ <Login /> } />
            <Route path='/CupStore/home' element={ <Home /> } />

        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
