import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

import { navigate } from '../../../config/rootNavigation';
import * as Constants from '../../../config/constants';

import styles from './style';
Icon.loadFont();

class ShopDirections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false,
    };
    
  }

  render() {
    return (
      <View style={styles.directionsContainer}>
        <MapView
          style={{flex: 1}}  
          // provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 8.480167,          
            longitude: 124.642528,
            latitudeDelta: 0.0022,          
            longitudeDelta: 0.0001,
          }}
          showsUserLocation={true}
        />
      </View>
    );
  }
}

export default ShopDirections;
