import React from 'react';
import { StatusBar } from 'react-native'
import { Connection } from './src/navigator/navigator'
import Provider from "./src/store/provider";

StatusBar.setBarStyle('light-content', true);

const App = () => {
  return (
    <Provider>
      <Connection />
    </Provider>
  );
}

export default App