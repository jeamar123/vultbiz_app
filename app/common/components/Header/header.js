import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
// import { navigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Constants from '../../../config/constants';
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
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={this.props.toggleDrawer}>
            <Text>
              <Icon 
                name="bars" 
                size={20} 
                style={{
                  color: Constants.HEADER_ICON_COLOR,
                }}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <Text>Logo</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>
            <Icon 
              name="user-circle" 
              size={20} 
              style={{
                color: Constants.HEADER_ICON_COLOR,
              }}
            />
          </Text>
        </View>
      </View>
    );
  }
}

export default Header;
