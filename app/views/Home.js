import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
  View, 
  Text,
  StatusBar,
  SafeAreaView,
  Image
} from 'react-native';

import * as Constants from '../config/constants';

import { Header } from '../common/components/Header';
import { HomeSearch } from '../common/components/HomeSearch';
import { Categories } from '../common/components/Categories';
import { Shops } from '../common/components/Shops';

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
        <SafeAreaView style={{ backgroundColor: Constants.HEADER_BG_COLOR }}/>
        <StatusBar 
          // hidden={false} 
          barStyle="light-content"
          backgroundColor="#FFF"
        />
        <Header 
          toggleDrawer={() => this.props.navigation.toggleDrawer()} 
          leftIcon="bars"
          rightIcon="user-circle"
        />
        <View style={styles.homeContentContainer}>
          <HomeSearch/>
          {/* <Image
            source={require('../../assets/img/auto-shop.jpg')}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: 200,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              marginTop: 20,
            }}
          /> */}
          <Categories/>
          <Shops/>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  homeContainer:  {
    flex: 1,
    // backgroundColor: '#fff',
  },
  homeContentContainer:  {
    backgroundColor: '#fafafa',
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 5
  },
  
});



export default Home;
