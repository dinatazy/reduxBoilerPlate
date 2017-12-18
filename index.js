import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import storeConfigure from './config/storeConfig'

const store = storeConfigure()

const ReduxBoilerPlateApp = () => (
  <Provider store = {store} >
    <App />
  </Provider>
)

AppRegistry.registerComponent('reduxBoilerPlate', () => ReduxBoilerPlateApp);
