import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigateToMainHomeScreen = () => {
    if (email.trim() && password.trim() && !emailError && !passwordError) {
      navigation.navigate('MainScreen');
    } else {
      alert('Please fill in all fields correctly');
    }
  };

  const navigateToForgotPasswordScreen = () => {
    if (email.trim() && !emailError) { // Check if email is not empty and has no errors
      navigation.navigate('ForgotPassword');
    } else {
      alert('Please enter a valid email first');
    }
  };
  

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('** Invalid email format **');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!regex.test(password)) {
      setPasswordError('** Password must be 6 to 16 characters long and contain at least one number, one special character, and one capital letter **');
    } else {
      setPasswordError('');
    }
  };

  const handleBlurEmail = () => {
    if (!email.trim()) {
      setEmailError('** Please fill in your email **');
    } else {
      setEmailError('');
    }
  };

  const handleBlurPassword = () => {
    if (!password.trim()) {
      setPasswordError('** Please fill in your password **');
    } else {
      setPasswordError('');
    }
  };

  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <TouchableOpacity style={styles.AntIcons} onPress={navigateToSignUpScreen}>
        <AntIcon name='left' size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>Login</Text>
      </View>

      <View style={styles.maintextinput}>
        <View style={styles.inputContainer}>
          <Text style={styles.placeholder}>Email</Text>
          <View style={[styles.inputWrapper, { flexDirection: 'row', alignItems: 'center' }]}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#888"
              keyboardType="email-address"
              placeholder='muffin.sweet@gmail.com'
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                validateEmail(text);
              }}
              onBlur={handleBlurEmail} // Add onBlur event handler
            />
    
              {email.trim() && !emailError && (
                <FontAwesome name="check" size={22} color="green" />
              )}
            

          </View>
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.placeholder}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              validatePassword(text);
            }}
            onBlur={handleBlurPassword} // Add onBlur event handler
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        </View>
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
  );
};

export default Login;

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
    marginTop: 15
  },
  accountText: {
    fontSize: 15,
    color: '#222222',
    marginRight: 5
  },
  LoginInButton: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 58,
  },
  LoginButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
  },
  footer: {
    alignItems: 'center',
    marginTop: 110
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
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },

});
