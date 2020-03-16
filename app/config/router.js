import React, { Component } from 'react';
import { 
  Animated, 
  Easing 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerItemList, 
  DrawerItem,
} from '@react-navigation/drawer';
import EStyleSheet from 'react-native-extended-stylesheet';
import { navigationRef } from './rootNavigation';

import Home from '../views/Home';
import ShopDetails from '../views/ShopDetails';
import UserDetails from '../views/UserDetails';

console.disableYellowBox = true;

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps
      const thisSceneIndex = scene.index
      const height = layout.initHeight
      const width = layout.initWidth

      // We can access our navigation params on the scene's 'route' property
      var thisSceneParams = scene.route.params || {}
      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })
      const translateY = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [height, 0, 0]
      })
      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
        outputRange: [0, 1, 1],
      })
      const scale = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [4, 1, 1]
      })
      const slideFromRight = { transform: [{ translateX }] }
      const scaleWithOpacity = { opacity, transform: [{ scaleX: scale }, { scaleY: scale }] }
      const slideInFromBottom = { transform: [{ translateY }] }

      return scaleWithOpacity
    },
  }
}

// const Drawer = createDrawerNavigator({
//   transitionConfig: TransitionConfiguration,
// });

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class RouterComponent extends Component {
  constructor(props) {
    super(props);
  }

  HomeDrawer  = (props)  =>  {
    return (
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerType="back"
        drawerStyle={styles.drawerStyle}
        drawerContent={(props) => this.CustomDrawerContent(props)}
        drawerContentOptions={{
          // activeBackgroundColor:  '#000',
          activeTintColor:  '#000',
        }}
      >
        <Drawer.Screen name="Home" component={Home}/>
      </Drawer.Navigator>
    );
  }

  CustomDrawerContent = (props) =>  {
    console.log(props);
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem
          label="Settings"
          onPress={() => props.navigation.navigate('UserDetails')}
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
        <Stack.Navigator
          headerMode="none"
        >
          <Stack.Screen name="HomePage" component={props  => this.HomeDrawer(props)} />
          <Stack.Screen name="ShopDetails" component={ShopDetails}/>
          <Stack.Screen name="UserDetails" component={UserDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RouterComponent;


const styles = EStyleSheet.create({
  drawerStyle: {
    padding: 0,
  },
});