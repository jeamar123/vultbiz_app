import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigate } from '../../../config/rootNavigation';
import * as Constants from '../../../config/constants';
import { FormInput } from '../FormInput';

import styles from './style';
Icon.loadFont();

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false,
    };
    
  }

  render() {
    return (
      <View style={styles.categoryContainer}>
        <TouchableOpacity onPress={() =>  navigate('ShopDetails')}>
          <View style={styles.category}>
            <Text>Car Shop</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Categories;
