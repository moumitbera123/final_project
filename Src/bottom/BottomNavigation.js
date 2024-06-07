import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './bottomScreens/Home';
// import Shop from './bottomScreens/Shop';
import Bag from './bottomScreens/Bag';
import Favorites from './bottomScreens/Favorites';
import Profile from './bottomScreens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from './bottomScreens/Categories';

const Bottom = createBottomTabNavigator();

const BottomNavigation = () => {
  
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({                                                             
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            // case 'Shop':
            //   iconName = 'cart-outline';
            //   break;
            case 'Bag':
              iconName = 'bag-outline';
              break;
              case 'Categories':
                iconName = 'grid-outline';
                break;
            case 'Favorites':
              iconName = 'heart-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#DB3022',
        inactiveTintColor: '#9B9B9B',
        "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ] 
      }}
    >
      <Bottom.Screen name="Home" component={Home} options={{ headerShown: false }} />
      {/* <Bottom.Screen name="Shop" component={Shop} options={{ headerShown: false }}/> */}
      <Bottom.Screen name="Bag" component={Bag} options={{ headerShown: false }}/>
      <Bottom.Screen name='Categories' component={Categories} options={{headerShown:false}}/>
      <Bottom.Screen name="Favorites" component={Favorites} options={{ headerShown: false }}/>
      <Bottom.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Bottom.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({});
