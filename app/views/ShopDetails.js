import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
  View, 
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import Icon from 'react-native-vector-icons/FontAwesome';

import * as Constants from '../config/constants';

import { Header } from '../common/components/Header';

class ShopDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: false,
      shopDetails:  {
        galleryImages:  [
          { 
            source: require('../../assets/img/grocery.jpg'), 
          },
          { source: require('../../assets/img/grocery2.jpeg'), },
          { source: require('../../assets/img/grocery3.jpg'), },
          { source: require('../../assets/img/grocery4.jpg'), },
          { source: require('../../assets/img/grocery5.jpg'), },
        ],
      },
      activeTab: 'details',
      shopRating: {
        starRating: [1,1,1,1,0.5],
        starRatingValue: 4.5,
        starRatingCount: 12
      }
      
    };
  }

  render() {
    return (
      <View style={styles.shopDetailsContainer}>
        <StatusBar 
          hidden={false} 
        />
        <Header 
          leftIcon="angle-left"
          leftIconSize={40}
          // rightIcon="map-marker"
          // rightIconSize={30}
          title=""
          headerContainerStyle={{
            backgroundColor: 'transparent',
            // backgroundColor: 'rgba(0,0,0,.4)',
            position: 'absolute',
            top: 45,
            zIndex: 5,
            // paddingTop: 50
            // height: 50,
            // width: '100%'
          }}
          iconStyle={{
            color: '#FFF'
          }}
        />
        <View style={styles.galleryContainer}>
          <GallerySwiper
            images={this.state.shopDetails.galleryImages}
            resizeMode="cover"
            enableTranslate={false}
          />
          {/* <View style={styles.galleryOverlay}></View> */}
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabBox,
              this.state.activeTab == 'details' ? styles.tabBoxActive : null,
            ]}
          >
            <Text style={styles.tabText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabBox}
          >
            <Text style={styles.tabText}>Directions</Text>
          </TouchableOpacity>
        </View>
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
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  shopDetailsContainer: {
    flex: 1,
  },
  galleryContainer: {
    height: '50%',
    position: 'relative'
  },
  galleryOverlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  },  
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
    backgroundColor: Constants.TAB_BG_COLOR
  },
  tabBox: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginHorizontal: 5,
    marginBottom: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    width: "auto"
  },
  tabBoxActive: {
    borderBottomColor: Constants.TAB_BORDER_COLOR,
  },
  tabText:  {
    textTransform: 'uppercase',
    fontSize: 11,
    color: Constants.TAB_FONT_COLOR,
    fontWeight: '500',
  },
  detailsContainer: {
    backgroundColor: '#eaeaea',
    flex: 1,
  },
  scrollDetailsContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  shopNameContainer:  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },  
  shopName: {
    fontSize: 25,
    fontWeight: '600',
    color: Constants.DEFAULT_FONT_COLOR,
    flex: 1,
  },
  shopDistance: {
    width: 120,
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '500',
    color: Constants.DEFAULT_FONT_COLOR,
  },
  shopAddress:  {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 20,
    color: Constants.DEFAULT_FONT_COLOR,
  },
  ratingContainer:  {
    flexDirection: 'row',
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10
  },
  starValue:  {
    color: Constants.DEFAULT_FONT_COLOR
  },  
  starImage:  {
    color: Constants.STAR_RATING_COLOR,
  },
  starImageIsActive:  {
    color: Constants.STAR_RATING_COLOR_ACTIVE,
  },
  businessHoursContainer: {
    marginTop: 30,
    marginBottom: 100
  },
  businessHoursText:  {
    marginBottom: 20,
    fontSize: 20
  },  
  listItem: {
    flexDirection: 'row',
    marginBottom: 15
  },
  listItemlabel:  {
    flex: 1,
    color: Constants.DEFAULT_FONT_COLOR,
  },
  listItemValue:  {
    flex: 1,
    color: Constants.DEFAULT_FONT_COLOR,
  }
});


export default ShopDetails;
