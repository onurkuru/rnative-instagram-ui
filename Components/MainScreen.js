import React, {Component}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'


import {TabNavigator} from 'react-navigation'
import { Icon } from 'native-base'

class MainScreen extends Component {


   static navigationOptions = {
      header : null
  }

	render(){
		return (
			<AppTabNavigator />
		);
	}
}
export default MainScreen;

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTab: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarposition: "bottom",
  tabBarOptions : {
    style : {
      ...Platform.select({
        android:{
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel : false,
    showIcon  : true 
  }


})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});
