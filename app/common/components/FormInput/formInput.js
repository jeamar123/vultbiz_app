import React, { Component } from 'react';
import { 
  View, 
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Constants from '../../../config/constants';
import styles from './style';
Icon.loadFont();

class formInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View 
        style={[
          styles.inputContainer,
          this.props.containerStyle
        ]}
      >
        {(this.props.label) ? (
          <Text 
            style={[
              styles.labelStyle,
              this.props.labelStyle
            ]}
          >{this.props.label}</Text>
        ) :  (
          null
        )}

        {(this.props.icon == 'search') ? (
          <Icon 
            name="search" 
            size={this.props.iconSize ? this.props.iconSize : 20}
            style={[
              styles.iconStyle, {
              color: this.props.iconColor ? this.props.iconColor : Constants.DEFAULT_ICON_COLOR,
              },  
              this.props.iconStyle
            ]}
          />
        ) :  (
          null
        )}
        <TextInput
          {...this.props}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor ? this.props.placeholderTextColor : Constants.FORM_PLACEHOLDER_COLOR}
          placeholderStyle={this.props.placeholderStyle}
          style={[
            {
              fontFamily: Constants.FONT_FAMILY,
              color: Constants.FORM_INPUT_COLOR,
            },
            styles.inputStyle,
            this.props.style, 
          ]}
        />
      </View>
    );
  }
}

export default formInput;
