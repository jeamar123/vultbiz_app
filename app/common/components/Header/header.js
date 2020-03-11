import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
// import { navigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigate } from '../../../config/rootNavigation';
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

  leftButton  = ()  =>  {
    let button = this.props.leftIcon;
    if(button == 'bars'){
      return (
        <TouchableOpacity onPress={this.props.toggleDrawer()}>
          <Text>
            <Icon 
              name={button} 
              size={20} 
              style={{
                color: Constants.HEADER_ICON_COLOR,
              }}
            />
          </Text>
        </TouchableOpacity>
      )
    }else if(button == 'angle-left') {
      return (
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Text>
            <Icon 
              name={button} 
              size={20} 
              style={{
                color: Constants.HEADER_ICON_COLOR,
              }}
            />
          </Text>
        </TouchableOpacity>
      )
    }  
  }

  render() {
    return (
      <View 
        style={[
          styles.headerContainer,
          this.props.headerContainerStyle
        ]}
      >
        <View style={styles.leftContainer}>
          { this.leftButton() }
        </View>
        <View style={styles.centerContainer}>
          <Text>{ this.props.title != null ? this.props.title : 'Logo' }</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>
            <Icon 
              name={this.props.rightIcon} 
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
