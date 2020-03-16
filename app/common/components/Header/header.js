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
        <TouchableOpacity onPress={this.props.toggleDrawer}>
          <Text>
            <Icon 
              name={button} 
              size={this.props.leftIconSize ? this.props.leftIconSize : 25} 
              style={[
                {
                  color: Constants.HEADER_ICON_COLOR,
                },
                this.props.iconStyle
              ]}
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
              size={this.props.leftIconSize ? this.props.leftIconSize : 25} 
              style={[
                {
                  color: Constants.HEADER_ICON_COLOR,
                },
                this.props.iconStyle
              ]}
            />
          </Text>
        </TouchableOpacity>
      )
    }else if(button == 'chevron-left') {
      return (
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Text>
            <Icon 
              name={button} 
              size={this.props.leftIconSize ? this.props.leftIconSize : 25} 
              style={[
                {
                  color: Constants.HEADER_ICON_COLOR,
                },
                this.props.iconStyle
              ]}
            />
          </Text>
        </TouchableOpacity>
      )
    }else{
      return null;
    }  
  }

  rightButton  = ()  =>  {
    let button = this.props.rightIcon;
    if(button == 'user-circle'){
      return (
        <TouchableOpacity onPress={() => navigate('UserDetails')}>
          <Text>
            <Icon 
              name={button} 
              size={this.props.rightIconSize ? this.props.rightIconSize : 25}  
              style={[
                {
                  color: Constants.HEADER_ICON_COLOR,
                },
                this.props.iconStyle
              ]}
            />
          </Text>
        </TouchableOpacity>
      )
    }else if(button == 'map-marker') {
      return (
        <TouchableOpacity>
          <Text>
            <Icon 
              name={button} 
              size={this.props.rightIconSize ? this.props.rightIconSize : 25} 
              style={[
                {
                  color: Constants.HEADER_ICON_COLOR,
                },
                this.props.iconStyle
              ]}
            />
          </Text>
        </TouchableOpacity>
      )
    }else{
      return null;
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
          <Text
            style={[
              styles.title,
              this.props.titleStyle
            ]}
          >{ this.props.title != null ? this.props.title : 'Logo' }</Text>
        </View>
        <View style={styles.rightContainer}>
          { this.rightButton() }
        </View>
      </View>
    );
  }
}

export default Header;
