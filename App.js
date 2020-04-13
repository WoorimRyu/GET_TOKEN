import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './src/screens/Login.js';
import Secured from './src/screens/Secured.js';

export default class App extends Component {

  state = {
    isLoggedIn: false,
    accessToken: ''
  }

  render() {

    if (this.state.isLoggedIn) 
      return <Secured 
          onLogoutPress={() => this.setState({isLoggedIn: false, accessToken: ''})}
          token={this.state.accessToken}
        />;
    else 
      return <Login 
          onLoginPress={(token) => this.setState({isLoggedIn: true, accessToken: token})}
        />;
  }

}

AppRegistry.registerComponent(App , () => App);