import { StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };
  const navigateToMainScreen = () => {
    if (name.trim() && email.trim() && password.trim()) {
      navigation.navigate('MainScreen');
    } else {
      // Show an error message or handle the case where inputs are not filled
      alert('Please fill in all fields');
    }
  };
  const navigateToSplashScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Splash' }],
    });
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(name)) {
      setNameError('** Name must contain only letters and spaces **');
    } else {
      setNameError('');
    }
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
    if (password.length < 6) {
      setPasswordError('** Password must be at least 6 characters long **');
    } else {
      setPasswordError('');
    }
  };

  const handleBlurName = () => {
    if (!name.trim()) {
      setNameError('** Please fill in your name **');
    } else {
      setNameError('');
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
    <TouchableOpacity style={styles.AntIcons} onPress={navigateToSplashScreen}>
      <AntIcon name='left' size={30} color="#000" />
    </TouchableOpacity>
    <View style={styles.Title}>
      <Text style={styles.TitleText}>Sign up</Text>
    </View>

    <View style={styles.maintextinput}>
      <View style={styles.inputContainer}>
        <Text style={styles.placeholder}>Name</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#888"
          placeholder='Mr. Muffin'
          value={name}
          onChangeText={(text) => {
            setName(text);
            validateName(text);
          }}
          onBlur={handleBlurName} // Add onBlur event handler
        />
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.placeholder}>Email</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#888"
          keyboardType="email-address"
          placeholder='mrmuff@example.com'
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
          onBlur={handleBlurEmail} // Add onBlur event handler
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.placeholder}>Password</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#888"
          secureTextEntry={true}
          placeholder="Password"
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
      <TouchableOpacity onPress={navigateToLoginScreen}>
        <View style={styles.accountTextContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <AntIcon name="arrowright" size={20} color="#DB3022" />
        </View>
      </TouchableOpacity>
    </View>

    <View>
      <TouchableOpacity style={styles.signInButton} onPress={navigateToMainScreen}>
        <Text style={styles.signInButtonText}>SIGN UP</Text>
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


export default SignUp;

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
    fontWeight: 'bold',
  },
  Title: {
    marginTop: 10,
    marginLeft: 22,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    fontSize: 19,
    color: 'black',
  },
  maintextinput: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 80,
    marginLeft: 20,
  },
  placeholder: {
    color: '#888',
    marginBottom: 5,
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 47,
  },
  account: {
    marginRight: 30,
    marginTop: 10,
  },
  accountTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  accountText: {
    fontSize: 15,
    color: '#222222',
    marginRight: 5,
  },
  signInButton: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 58,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 19,
  },
  footer: {
    alignItems: 'center',
    marginTop: 45,
  },
  text: {
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 30,
    fontSize: 18,
    color: '#222222',
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
