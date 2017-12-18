import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import App from './App';
import { Provider, connect} from 'react-redux'
import storeConfigure from './app/config/storeConfig'
import AppNavigator from './app/navigators/appNavigator'
import { addNavigationHelpers } from "react-navigation";



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
