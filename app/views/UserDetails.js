import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
  View, 
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import * as Constants from '../config/constants';

import { Header } from '../common/components/Header';
import { FormInput } from '../common/components/FormInput';
import { Button } from '../common/components/Button';

class ShopDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: false,
    };
  }

  render() {
    return (
      <View style={styles.userDetailsContainer}>
        <SafeAreaView style={{ backgroundColor: Constants.HEADER_BG_COLOR }}/>
        <StatusBar 
          hidden={false} 
        />
        <Header 
          leftIcon="angle-left"
          title="My Profile"
        />
        <View style={styles.formContainer}>
          <Text style={styles.formHeader}>CONTACT INFORMATION</Text>
          <FormInput
            label="First Name"
            placeholder="First Name"
            containerStyle={styles.formInputContainer}
            style={styles.inputStyle}
          />
          <FormInput
            label="Last Name"
            placeholder="Last Name"
            containerStyle={styles.formInputContainer}
            style={styles.inputStyle}
          />
          <FormInput
            label="Email"
            placeholder="Email"
            containerStyle={styles.formInputContainer}
            style={styles.inputStyle}
          />
          <FormInput
            label="Mobile Number"
            placeholder="Mobile Number"
            containerStyle={styles.formInputContainer}
            style={styles.inputStyle}
          />
          <FormInput
            label="Change Password"
            placeholder="********"
            containerStyle={styles.formInputContainer}
            style={styles.inputStyle}
          />

          <Button
            buttonContainerStyle={styles.buttonContainerStyle}
          >
            Save
          </Button>
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  userDetailsContainer: {
    backgroundColor: "#FFF",
  },
  formContainer:  {
    backgroundColor: "#efefef"
  },
  formInputContainer:  {
    padding: 10,
    backgroundColor: '#FFF',
    height: 50,
    marginBottom: 2,
  },
  formHeader: {
    padding: 5,
    textAlign: 'center',
    color: Constants.DEFAULT_FONT_COLOR
  },
  inputStyle: {
    textAlign: 'right',
  },
  buttonContainerStyle: {
    marginTop: 50,
    marginHorizontal: 20,
  }
});


export default ShopDetails;
