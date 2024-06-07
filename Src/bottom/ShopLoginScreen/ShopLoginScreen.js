import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AntIcon from 'react-native-vector-icons/AntDesign';

  const ShopLoginScreen = () => {
  const navigation = useNavigation();
  const navigateSignUpScreen = () => {
    navigation.navigate('Login');
  }
  const navigateToScreen1 = () =>{
    navigation.navigate('Screen1');
  }
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.AntIcons} onPress={navigateToScreen1}>
        <AntIcon name='left' size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Book a Hotel and pay for Only the time you stay</Text>
      <Image 
      source={{uri:'https://media.istockphoto.com/id/1203001368/photo/seoul-crowded-streets-of-sinchon-nightlife-neon-signs-south-korea.webp?b=1&s=170667a&w=0&k=20&c=p-IBgmXUjFKh6LSpzvLvcuO9PH0jqlvakyP2yKqZkSg='}}
      style={styles.img}
      />
      <Text style={styles.informationtext}>Oh no! You're not logged in</Text>
      <View style={styles.description}>
      <Text style={styles.descriptiontext}>You need to login or create an account so we can find out if we have any items you need</Text>
      </View>
      <View style={styles.LoginInButtoncontainer}>
        <TouchableOpacity style={styles.LoginInButton} onPress={navigateSignUpScreen}>
          <Text style={styles.LoginButtonText}>SIGN IN or SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ShopLoginScreen

const styles = StyleSheet.create({
  
  // container:{
  //   flex:4,
  //   justifyContent:'center',
  //   alignItems:"center"
  // },
  
  
  LoginInButton: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    marginLeft: 25,
    marginTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 58,
  },
  LoginButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
  }, LoginButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
  },
  title:{
    marginHorizontal:60,
    marginTop:20,
    fontSize:19,
    marginLeft:90,
    fontWeight:"700",
    color:'#000000'
  },
  informationtext:{
    marginLeft:90,
    fontSize:16,
    fontWeight:'700',
    color:'#000000'
  },
  descriptiontext:{
    marginHorizontal:40,
    fontSize:15,
    fontWeight:'700',
    marginTop:10
  },
  img:{
    width:200,
    height:200,
    marginTop:50,
    margin:90,
    borderRadius:100
  },
  LoginInButtoncontainer:{
    marginRight:10
  },
  AntIcons: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 17,
  },

})