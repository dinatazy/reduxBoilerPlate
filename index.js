import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import App from './App';
import { Provider, connect} from 'react-redux'
import storeConfigure from './app/config/storeConfig'
import AppNavigator from './app/navigators/appNavigator'
import { addNavigationHelpers } from "react-navigation";
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCCOKlE9x6A7WUBWNQKnnrLc9eGNfNphds",
  authDomain: "my-project-1504690858587.firebaseapp.com",
  databaseURL: "https://my-project-1504690858587.firebaseio.com",
  projectId: "my-project-1504690858587",
  storageBucket: "my-project-1504690858587.appspot.com",
  messagingSenderId: "7984496866"
};
firebase.initializeApp(config);



class AppWithNavigationState extends Component {
  render() {
      return (
          <AppNavigator
              navigation={addNavigationHelpers({
                  dispatch: this.props.dispatch,
                  state: this.props.nav
              })}
          />
      );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const App =  connect(mapStateToProps)(AppWithNavigationState);

const store = storeConfigure()

const ReduxBoilerPlateApp = () => (
  <Provider store = {store} >
    <App/>
  </Provider>
)

AppRegistry.registerComponent('reduxBoilerPlate', () => ReduxBoilerPlateApp);
