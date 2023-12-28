import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import m1 from '../src/Components/Assets/m1.png'
import w1 from '../src/Components/Assets/w1.jpg'
import k1 from '../src/Components/Assets/k1.jpg'
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
   <Routes>
      <Route  path='/' element={<Shop/>}/>
      <Route  path='/mens' element={<ShopCategory banner={m1} category="men" />}/>
      <Route  path='/womens' element={<ShopCategory category="women" banner={w1}/>}/>
      <Route  path='/kids' element={<ShopCategory category="kid" banner={k1}/>}/>
      <Route  path="/product" element={<Product/>}/>
      <Route  path='/:productId' element={<Product/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/login' element={<LoginSignup/>}/>
    </Routes>
    </BrowserRouter>


<Footer/>
  
    </>
  );
}

export default App;
