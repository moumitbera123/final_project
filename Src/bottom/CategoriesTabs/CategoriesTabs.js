import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import WomenScreen from './Screens/WomenScreen';
import Menscreen from './Screens/Menscreen';
import KidsScreen from './Screens/KidsScreen';
const Tab = createMaterialTopTabNavigator();
const CategoriesTabs = () => {
  return (
<Tab.Navigator         
  tabBarOptions={{
    activeTintColor: '#DB3022',
    inactiveTintColor: '#9B9B9B',
    style: {
      backgroundColor: '#fff',
    },
    indicatorStyle: {
      backgroundColor: '#DB3022',
    },
  }}

>
    <Tab.Screen name='Women' component={WomenScreen}/>
    <Tab.Screen name='Men' component={Menscreen}/>
    <Tab.Screen name='Kids' component={KidsScreen}/>
</Tab.Navigator>
  )
}

export default CategoriesTabs

const styles = StyleSheet.create({})