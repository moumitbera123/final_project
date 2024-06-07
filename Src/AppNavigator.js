
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Splash from './normal/Splash';
import MainScreen from './normal/MainScreen';
import SignUp from './LoginScreen/SignUp';
import Login from './LoginScreen/Login';
import ForgotPassword from './LoginScreen/ForgotPassword';
import OnbordingScreen from './OnbordingScreen/OnbordingScreen';
import OtpScreen from './OTP/OtpScreen';
import ShopLoginScreen from './bottom/ShopLoginScreen/ShopLoginScreen';
import HomeBanner from './HomeScreenBanner/HomeBanner';
import ViewAllNew from './HomeScreenBanner/ViewAllNew';
import ViewAllSale from './HomeScreenBanner/ViewAllSale';
import SettingsScreen from './bottom/bottomScreens/Settings/SettingsScreen';






const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
       
        <Stack.Screen name='OnbordingScreen' component={OnbordingScreen}/>
  
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='OtpScreen' component={OtpScreen} />


        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name='HomeBanner' component={HomeBanner}/>
      <Stack.Screen name='ViewAllNew' component={ViewAllNew}/>
      <Stack.Screen name='ViewAllSale' component={ViewAllSale}/>
        <Stack.Screen name='ShopLoginScreen' component={ShopLoginScreen}/>
  <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
