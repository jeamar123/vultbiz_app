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
import { ShopInformation } from '../common/components/ShopInformation';
import { ShopDirections } from '../common/components/ShopDirections';

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
      activeTab: 'directions',
      
    };
  }

  selectTab = (opt) => {
    this.setState({
      activeTab: opt
    });
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
              this.state.activeTab == 'information' ? styles.tabBoxActive : null,
            ]}
            onPress={() => this.selectTab('information')}
          >
            <Text style={styles.tabText}>Information</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabBox,
              this.state.activeTab == 'directions' ? styles.tabBoxActive : null,
            ]}
            onPress={() => this.selectTab('directions')}
          >
            <Text style={styles.tabText}>Directions</Text>
          </TouchableOpacity>
        </View>
        
        {
          this.state.activeTab == 'information' ?
            <ShopInformation/>  
          :
            <ShopDirections/>
        }
        
        
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
});


export default ShopDetails;
