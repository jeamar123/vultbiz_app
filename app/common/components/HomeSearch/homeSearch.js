import React, { Component } from 'react';
import { 
  View, 
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Constants from '../../../config/constants';
import { FormInput } from '../FormInput';

import styles from './style';
Icon.loadFont();

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View style={styles.searchContainer}>
        <FormInput
          icon="search"
          iconSize={15}
          placeholder="e.g Food, Cars..."
        />
      </View>
    );
  }
}

export default Header;
