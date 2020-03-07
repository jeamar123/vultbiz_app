import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
  View, 
  Text,
  StatusBar
} from 'react-native';

import * as Constants from '../config/constants';

import { Header } from '../common/components/Header';
import { HomeSearch } from '../common/components/HomeSearch';

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <StatusBar 
          hidden={true} 
        />
        <Header toggleDrawer={() => this.props.navigation.toggleDrawer()} />
        <View style={styles.homeContentContainer}>
          <HomeSearch/>
          <View style={styles.categoryContainer}>
            
          </View>
          <View style={styles.nearShopContainer}>
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  homeContainer:  {
    flex: 1,
  },
  homeContentContainer:  {
    backgroundColor: '#fafafa',
    flex: 1,
    padding: 10
  },
});



export default Home;
