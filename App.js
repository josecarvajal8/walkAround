import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import  Home  from './pages/home';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <Scene key ="root">
          <Scene key="home" component={Home} title="Walk Around" left = {()=> null}/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
