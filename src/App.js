import React from 'react';
// native base
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';

import Home from './Components/Home';
import configureStore from './store';

const store = configureStore();

const App = () => (
  <NativeBaseProvider>
    <Provider store={store}>
      <Home />
    </Provider>
  </NativeBaseProvider>
  );
export default App;
