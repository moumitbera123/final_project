import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
  const navigation = useNavigation()

  const navigateToLoginScreen =()=>{
    navigation.navigate('Login')
  }
  return (
    <View>
      <TouchableOpacity style={styles.AntIcons}  onPress={navigateToLoginScreen}>
        <AntIcon name='left' size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.Title}>
        <Text style={styles.TitleText}>Forgot password</Text>
      </View>
      <View style={styles.InputDescription}>
      <Text style={styles.InputDescriptionText}>
        Please, enter your email address. You will receive a link to create a new password via email.
      </Text>
      </View>
      

      <View style={styles.maintextinput}>
        <View style={[styles.inputContainer, { borderColor: '#F01F0E', borderWidth: 1 }]}>
          <Text style={styles.placeholder}>Email</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#888"
              placeholder='email2'
              keyboardType='email-address'
              
            />
            <View style={styles.closeicon}>
            <AntIcon name='close' size={30} color='#F01F0E' />
            </View>
        
          </View>

        </View>
      </View>
      <View style={styles.Forgot}>
        <Text style={styles.ForgotText}>Not a valid email address. Should be your@email.com</Text>
      </View>
      
      <View>
        <TouchableOpacity style={styles.SendButton}>
          <Text style={styles.SendButtonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgotPassword

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
    marginLeft: 28
  },
  InputDescription:{
    marginTop:100,
    paddingHorizontal:35,
    paddingVertical:20
  },
  maintextinput: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 2,
    marginLeft: 10,
    marginRight:10,
    
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    borderRadius:5,
    height:90,
    
  },
  placeholder: {
    color: '#888',
    marginBottom: 5,
    fontSize: 14,
    padding:10
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
    justifyContent: 'space-between',
    paddingVertical:1,
    paddingHorizontal:5,
    marginBottom:10,
    // marginTop:28,
    // marginLeft:10
   
  },
  input: {
    width: '100%',
    fontSize: 19,
    color: 'black',
    padding:5,
  
    
  },
  Forgot:{
    marginLeft:40,
  },
  ForgotText:{
    color:'#F01F0E',
    fontSize:13
  },
  SendButton:{
    backgroundColor: '#DB3022',   
    borderRadius: 25,
    marginLeft: 25,
    marginTop: 85,
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 70,
  },
  SendButtonText:{
    color: '#FFFFFF',
    fontSize: 19,
  },
  InputDescriptionText:{
    fontSize:14,
    fontWeight:'bold'
  },
  closeicon:{
    marginRight:10,
    marginBottom:10
  }
})