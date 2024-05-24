
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DrawerNavigator from '../drawer/DrawerNavigator';

const MainScreen = () => {
  return (
    <View style={{flex:1}}>
      <DrawerNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MainScreen;
