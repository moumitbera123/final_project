import { StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from './Screens/Screen1';

import Home from '../bottom/bottomScreens/Home';
import Shop from '../bottom/bottomScreens/Shop';
import Bag from '../bottom/bottomScreens/Bag';
import Favorites from '../bottom/bottomScreens/Favorites';
import Profile from '../bottom/bottomScreens/Profile';

const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
  return (
   <Drawer.Navigator screenOptions={{headerShown:false}}>
    <Drawer.Screen name='Screen1' component={Screen1}/>

    <Drawer.Screen name='Home' component={Home}/>
    <Drawer.Screen name='Shop' component={Shop}/>
    <Drawer.Screen name='Bag' component={Bag}/>
    <Drawer.Screen name='Favorites' component={Favorites}/>
    <Drawer.Screen name='Profile' component={Profile}/>
    

   </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})