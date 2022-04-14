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
  const openItem = useOpenItem();
  const orders = useOrders();
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
