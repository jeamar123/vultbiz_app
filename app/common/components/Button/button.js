import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Constants from '../../../config/constants';

import styles from './style';
Icon.loadFont();

class Button extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <TouchableOpacity 
        style={[
          styles.buttonStyle,
          this.props.buttonContainerStyle
        ]}
        {...this.props}
      >
        <Text
          style={[
            styles.buttonText
          ]}
        >
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
