import React from 'react';
import { initializeApp } from 'firebase/app';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { getDatabase } from 'firebase/database';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { Context } from './Components/Context';

const firebaseConfig = {
  apiKey: 'AIzaSyCvdoXD2QNVzAoEJO9IdnzEqhirZlr_vDI',
  authDomain: 'mrdonalds-3e10a.firebaseapp.com',
  databaseURL:
    'https://mrdonalds-3e10a-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'mrdonalds-3e10a',
  storageBucket: 'mrdonalds-3e10a.appspot.com',
  messagingSenderId: '578148200518',
  appId: '1:578148200518:web:c40b1b9f8aefcda49fda47',
};

initializeApp(firebaseConfig);

function App() {
  const auth = useAuth();
  const database = getDatabase();
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{ auth, openItem, orders, orderConfirm, database }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
