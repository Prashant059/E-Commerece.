import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import ProductDetails from './Routes/ProductDetails';
import Cart from './Routes/Cart';
import UserLogin from './Routes/UserLogin'
import UserRegistration from './Routes/UserRegistration'
import ProductOverView from './Routes/ProductOverView';



function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/productdetails' element={<ProductDetails />}></Route>
      <Route path='/login' element={<UserLogin />}></Route>
      <Route path='/registration' element={<UserRegistration />}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/productoverview/:id' element={<ProductOverView/>}></Route>
    </Routes>
    </>
  )
}

export default App;
