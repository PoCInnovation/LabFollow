import React from 'react';
import { StatusBar } from 'react-native'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { uri as serverURL } from './src/network'
import { Connection } from './src/navigator/navigator'
import Provider from "./src/store/provider";

StatusBar.setBarStyle('light-content', true);

const client = new ApolloClient({
  uri: serverURL,
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Connection />
      </Provider>
    </ApolloProvider>
  );
}

export default App