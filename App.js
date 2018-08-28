import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import {
  Store,
  PersisStore,
} from './store';
import { PersistGate } from 'redux-persist/es/integration/react';
import Products from './component/product';

export default class App extends Component<Props> {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={Store}>
        <PersistGate persistor={PersisStore}>
          <View style={{ flex: 1 }}>
            <Products/>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}