import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';

console.disableYellowBox = true;

const Stack = createStackNavigator();

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    console.log('router is running!');
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RouterComponent;