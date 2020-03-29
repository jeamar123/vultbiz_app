import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Constants from '../../../config/constants';

import styles from './style';
Icon.loadFont();

class SideMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View 
        style={styles.sideMenuContainer}
        {...this.props}
      >
        <SafeAreaView style={{ backgroundColor: Constants.HEADER_BG_COLOR }}/>
        <View style={styles.menuHeader}></View>
        <View style={styles.menuListContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default SideMenu;
