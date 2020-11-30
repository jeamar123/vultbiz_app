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

class ShopInformation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false,
      shopRating: {
        starRating: [1,1,1,1,0.5],
        starRatingValue: 4.5,
        starRatingCount: 12
      }
    };
    
  }

  render() {
    return (
      <View style={styles.detailsContainer}>
        <ScrollView style={styles.scrollDetailsContainer}>
          <View style={styles.shopNameContainer}>
            <Text style={styles.shopName}>
              24/7 One stop shop
            </Text>
            <Text style={styles.shopDistance}>1.20km</Text>
          </View>
          <Text style={styles.shopAddress}>
            Pacana-Burgos St., Barangay 8, Cagayan de Oro City, Philippines 9000
          </Text>
          <View 
            style={styles.ratingContainer}
          >
            <View style={styles.starsContainer}>
              {
                this.state.shopRating.starRating.map((value, key)  =>  {
                  return (
                    <Icon 
                      key={key}
                      name={value == 1 ? 'star' : 'star-half-o'}
                      size={18} 
                      style={[
                        styles.starImageIsActive
                      ]}
                    />
                  )
                })
              }
              
            </View>
            <Text style={styles.starValue}>{this.state.shopRating.starRatingValue} ({this.state.shopRating.starRatingCount})</Text>
          </View>

          <View
            style={styles.businessHoursContainer}
          >
            <Text style={styles.businessHoursText}>Business Hours</Text>
            <View style={styles.listItem}>
              <Text style={styles.listItemlabel}>Monday</Text>
              <Text style={styles.listItemValue}>9:00am - 7:00pm</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemlabel}>Tuesday</Text>
              <Text style={styles.listItemValue}>9:00am - 7:00pm</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemlabel}>Wednesday</Text>
              <Text style={styles.listItemValue}>9:00am - 7:00pm</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemlabel}>Thursday</Text>
              <Text style={styles.listItemValue}>9:00am - 7:00pm</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemlabel}>Friday</Text>
              <Text style={styles.listItemValue}>9:00am - 7:00pm</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemlabel}>Saturday</Text>
              <Text style={styles.listItemValue}>9:00am - 7:00pm</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.listItemlabel}>Sunday</Text>
              <Text style={styles.listItemValue}>Closed</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ShopInformation;
