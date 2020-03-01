import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: false,
    };
    console.log('Home is running!');
  }

  render() {
    return (
      <View>
        <Text>I am Home!</Text>
      </View>
    );
  }
}

export default Home;
