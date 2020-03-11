import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
  View, 
  Text,
  StatusBar
} from 'react-native';

import * as Constants from '../config/constants';

import { Header } from '../common/components/Header';

class ShopDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View style={styles.shopDetailsContainer}>
        <StatusBar 
          hidden={true} 
        />
        <Header 
          leftIcon="angle-left"
          rightIcon="map-marker"
          title=""
          headerContainerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
        />
        <View style={styles.container}>
          
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
 
});


export default ShopDetails;
