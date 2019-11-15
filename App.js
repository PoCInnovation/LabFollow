import React from 'react';
import { StatusBar } from 'react-native'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { uri as serverURL } from './app/network'
import { Connection } from './app/navigator/navigator'

StatusBar.setBarStyle('light-content', true);

const client = new ApolloClient({
  uri: serverURL,
});


export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Connection />
      </ApolloProvider>
    );
  }
}