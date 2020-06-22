import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import PetishContainer from './components/PetishContainer';
import ItemContainer from './components/ItemContainer';
import {Provider} from 'react-redux'
import store from './redux/Store'
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer/>
      {/* <HooksCakeContainer/>
     <CakeContainer/>
     <IceCreamContainer/>
     <PetishContainer/>
     <NewCakeContainer/>
     <ItemContainer cake/>
     <ItemContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
