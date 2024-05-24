
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Splash from './normal/Splash';
import MainScreen from './normal/MainScreen';
import SignUp from './LoginScreen/SignUp';
import Login from './LoginScreen/Login';
import ForgotPassword from './LoginScreen/ForgotPassword';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />


        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>



        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
