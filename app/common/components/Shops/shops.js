import React, { Component } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { navigate } from '../../../config/rootNavigation';
import * as Constants from '../../../config/constants';

import styles from './style';
Icon.loadFont();

class Shops extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false,
      shops: [
        {
          name: '24/7 One stop shop',
          img: require('../../../../assets/img/grocery.jpg'),
          address: 'Pacana-Burgos St., Barangay 8,.',
          distance: '1.20km',
        },
        {
          name: 'Watsons',
          img: require('../../../../assets/img/pharmacy.jpg'),
          address: 'Pacana-Burgos St., Barangay 8,.',
          distance: '4.67km',
        },
        {
          name: 'Car Repair Shop',
          img: require('../../../../assets/img/auto-shop.jpg'),
          address: 'Pacana-Burgos St., Barangay 8,.',
          distance: '5.00km',
        },
        
      ]
    };
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Nearby Shops</Text>
        <ScrollView style={styles.shopContainer}>
          {
            this.state.shops.map((value, key) =>  {
              return (
                <TouchableOpacity style={styles.shop} onPress={() =>  navigate('ShopDetails')} key={key}>
                  <Image
                    source={{ uri : 'https://drive.google.com/file/d/17pKBCSFKgDZho9jBt1aavskbV6K-XLMK/view?usp=sharing' }}
                    style={styles.shopImage}
                  />
                  <View style={styles.imageOverlay}></View>
                  <View style={styles.shopDetails}>
                    <View style={styles.flexRow}>
                      <Text style={styles.shopName}>{value.name}</Text>
                      <Text style={styles.shopDistance}>{value.distance}</Text>
                    </View>
                    <Text style={styles.shopAddress}>{value.address}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
          
        </ScrollView>
      </View>
    );
  }
}

export default Shops;
