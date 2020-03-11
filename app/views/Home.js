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
import { Categories } from '../common/components/Categories';

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
        <Header 
          toggleDrawer={() => this.props.navigation.toggleDrawer()} 
          leftIcon="bars"
          rightIcon="user-circle"
        />
        <View style={styles.homeContentContainer}>
          <HomeSearch/>
          <Categories/>
          
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
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  
});



export default Home;
