import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the refresh icon from react-native-vector-icons
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
  const navigation = useNavigation();
  const id1 = useRef();
  const id2 = useRef();
  const id3 = useRef();
  const id4 = useRef();
  const id5 = useRef();
  const id6 = useRef();

  const [count, setCount] = useState(60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setCount(prevCount => {
          if (prevCount === 0) {
            clearInterval(intervalId);
            setTimerRunning(false); // Stop the timer when count reaches 0
            return 0;
          } else {
            return prevCount - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [timerRunning]);

  const handleResendCode = () => {
    // Implement logic to resend code
    setCount(60); // Reset timer to 60 seconds
    setTimerRunning(true); // Start the timer again
  };
  const navigateToforgotpasswordScreen =()=>{
    navigation.navigate('ForgotPassword');
  }

  return (
    <View>
          <TouchableOpacity style={styles.AntIcons} onPress={navigateToforgotpasswordScreen}>
        <AntIcon name='left' size={30} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.titletext}>SMS sent on moumit1******.com with </Text>
      <Text style={styles.titletext}>6-digit code</Text>
      <View style={styles.otpview}>
        <TextInput
          style={styles.inputview}
          keyboardType="number-pad"
          maxLength={1}
          ref={id1}
          onChangeText={text => { if (text.length >= 1) { id2.current.focus(); } }}
        />
        <TextInput
          style={styles.inputview}
          keyboardType="number-pad"
          maxLength={1}
          ref={id2}
          onChangeText={text => {
            if (text.length >= 1) { id3.current.focus(); }
          }}
        />
        <TextInput
          style={styles.inputview}
          keyboardType="number-pad"
          maxLength={1}
          ref={id3}
          onChangeText={text => {
            if (text.length >= 1) { id4.current.focus(); }
          }}
        />
        <TextInput
          style={styles.inputview}
          keyboardType="number-pad"
          maxLength={1}
          ref={id4}
          onChangeText={text => {
            if (text.length >= 1) { id5.current.focus(); }
          }}
        />
        <TextInput
          style={styles.inputview}
          keyboardType="number-pad"
          maxLength={1}
          ref={id5}
          onChangeText={text => {
            if (text.length >= 1) { id6.current.focus(); }
          }}
        />
        <TextInput
          style={styles.inputview}
          keyboardType="number-pad"
          maxLength={1}
          ref={id6}
          onChangeText={text => { }}
        />
      </View>
      <TouchableOpacity style={styles.Otpproceed}>
        <Text style={styles.Otpproceedtext}>Proceed</Text>
      </TouchableOpacity>
      {!timerRunning && (
        <View style={styles.resendContainer}>
          <TouchableOpacity onPress={handleResendCode} style={styles.resendButton}>
            <Icon name="refresh" size={20} color="#DB3022" />
            <Text style={styles.resendbuttonText}>Resend code</Text>
          </TouchableOpacity>
        </View>
      )}
      {timerRunning && (
        <View style={styles.timer}>
          <Text style={styles.countnumber}>{count}</Text>
        </View>
      )}
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  AntIcons: {
    width: 50,
    height: 50,
    marginTop: 54,
    marginLeft: 17,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 30,
    alignSelf: 'center',
    color: '#DB3022',
  },
  titletext: {
    fontSize: 17,
    marginTop: 12,
    alignSelf: 'center',
    color:'#000'
  },
  otpview: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
    
  },
  inputview: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
  },
  Otpproceed: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    marginLeft: 30,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 58,
  },
  Otpproceedtext: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight:'bold'
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
   
  },
  timer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center'
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  resendbuttonText: {
    marginLeft: 10,
    fontSize:17,
    fontWeight:'bold',
    color:'#DB3022'
  },
  countnumber:{
    fontSize:35,
    fontWeight:'bold'
  },

  image:{
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 75,
    alignSelf:'center',
    marginTop:40
  }
});
