import React from 'react';
import './assets/css/App.css';
import './assets/css/main.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Inventory from './pages/Inventory';
import Trade from './pages/Trade';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import WalletPage from './pages/WalletPage';
import { Route, Routes } from 'react-router-dom';
import { WalletProvider } from './components/WalletContext'
function App() {
  return (
    <WalletProvider> {}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/inventory' element={<Inventory />}></Route>
        <Route path='/trade' element={<Trade />}></Route>
        <Route path='/wallet' element={<WalletPage />}></Route> 
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
      </Routes>   
    </WalletProvider>
  );
}

export default App;
