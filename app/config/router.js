import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList, 
  DrawerItem 
} from '@react-navigation/drawer';
import EStyleSheet from 'react-native-extended-stylesheet';
import { navigationRef } from './rootNavigation';

import Home from '../views/Home';
import ShopDetails from '../views/ShopDetails';

console.disableYellowBox = true;

const Drawer = createDrawerNavigator();

class RouterComponent extends Component {
  constructor(props) {
    super(props);
    console.log('router is running!');
  }

  CustomDrawerContent = (props) =>  {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem
          label="Settings"
          // onPress={() => Linking.openUrl('https://mywebsite.com/help')}
          style={styles.drawerItemStle}
        />
        <DrawerItem
          label="Logout"
          // onPress={() => Linking.openUrl('https://mywebsite.com/help')}
          style={styles.drawerItemStle}
        />
      </DrawerContentScrollView>
    );
  }

  render() {
    return (
      <NavigationContainer
        ref={navigationRef}
      >
        <Drawer.Navigator 
          initialRouteName="Home"
          drawerStyle={styles.drawerStyle}
          drawerContent={props => this.CustomDrawerContent(props)}
          drawerContentOptions={{
            // activeBackgroundColor:  '#000',
            activeTintColor:  '#000',
          }}
        >
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="ShopDetails" component={ShopDetails}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default RouterComponent;


const styles = EStyleSheet.create({
  drawerStyle: {
    padding: 0,
  },
  drawerItemStle: {

  }
});