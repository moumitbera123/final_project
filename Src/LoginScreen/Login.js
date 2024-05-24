import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()

  const navigateToMainHomeScreen = () => {
    navigation.navigate('MainScreen')
  }
  const navigateToForgotPasswordScreen = () => {
    navigation.navigate('ForgotPassword');
  };
  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View>
      <TouchableOpacity style={styles.AntIcons} onPress={navigateToSignUpScreen}>
        <AntIcon name='left' size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>Login</Text>
      </View>

      <View style={styles.maintextinput}>
        <View style={styles.inputContainer}>
          <Text style={styles.placeholder}>Email</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#888"
              placeholder='muffin.sweet@gmail.com'
              keyboardType='email-address'
            />
            <AntIcon name='check' size={30} color='#2AA952' />
          </View>

        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.account}>
        <TouchableOpacity onPress={navigateToForgotPasswordScreen}>
          <View style={styles.accountTextContainer}>
            <Text style={styles.accountText}>Forgot your password?</Text>
            <AntIcon name="arrowright" size={20} color="#DB3022" />
          </View>
        </TouchableOpacity>

      </View>

      <View>
        <TouchableOpacity style={styles.LoginInButton} onPress={navigateToMainHomeScreen}>
          <Text style={styles.LoginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>Or sign up with social account</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="google" size={30} color="#4285F4" />
          </TouchableOpacity>
          <View style={styles.gap} />
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  AntIcons: {
    width: 50,
    height: 50,
    marginTop: 54,
    marginLeft: 17,
  },
  TitleText: {
    fontSize: 42,
    color: "#222222",
    fontWeight: 'bold'
  },
  Title: {
    marginTop: 10,
    marginLeft: 22
  },
  maintextinput: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 80,
    marginLeft: 20
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  placeholder: {
    color: '#888',
    marginBottom: 5,
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
    justifyContent: 'space-between'
  },
  input: {
    width: '100%',
    fontSize: 19,
    color: 'black',
  },
  account: {
    marginRight: 30,
    marginTop: 10
  },
  accountTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop:15
  },
  accountText: {
    fontSize: 15,
    color: '#222222',
    marginRight:5
  },
  LoginInButton:{
    backgroundColor: '#DB3022',   
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 58,
  },
  LoginButtonText:{
    color: '#FFFFFF',
    fontSize: 19,
  },
  footer: {
    alignItems: 'center',
    marginTop:110
  },
  text: {
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 30,
    fontSize: 18,
    color: '#222222'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 40, 
  },
  gap: {
    width: 10, 
  },
})
