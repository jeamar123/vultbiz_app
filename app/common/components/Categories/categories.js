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

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false,
      categoryList: ['Entertainment','Health','Transportation','Food','Sports']
    };
    
  }

  render() {
    return (
      <View style={styles.categoryContainer}>
          { 
            this.state.categoryList.map((value,key)  =>  {
              return (
                <TouchableOpacity style={styles.category} key={key}>
                  <View >
                    {/* <Image
                      source={require('../../../../assets/img/shop.png')}
                      style={styles.categoryImage}
                    /> */}
                    <Icon 
                      name="question" 
                      size={35} 
                      style={styles.iconImage}
                    />
                    <Text style={styles.categoryName}>{value}</Text>
                  </View>
                </TouchableOpacity>
              )
            }) 
          }
          <TouchableOpacity style={styles.category}>
            <View >
              <Text style={styles.categoryName}>See more</Text>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Categories;
