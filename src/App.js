import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import { setCurrentUser } from './store/user/user.action';
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
