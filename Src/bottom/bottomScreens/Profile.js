import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {

  
  return (
    <View style={styles.container}>
      <View style={styles.seacrchicon}>
        <MaterialIcon name="search" size={32} color="#000" />
      </View>

      <View style={styles.titlecontainer}>
        <Text style={styles.title}>My Profile</Text>
      </View>
      <View style={styles.profileimg}>
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.webp?b=1&s=170667a&w=0&k=20&c=7wzo05o8oXxE8K7LxzFqWYZu9HbNlGev0f1Lt-Q1_6Q=' }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
        />
      </View>

      <View style={styles.nametextcontainer}>
        <Text style={styles.nametext}>Matilda Brown</Text>
        <Text style={styles.emailtext}>matildabrown@mail.com</Text>
      </View>

      <View style={styles.container2}>

        <TouchableOpacity>
        <View style={styles.orders}>
          <Text style={styles.orderstitle}>My orders</Text>
          <Text style={styles.ordersdescription}>Already have 12 orders</Text>
          <View style={styles.arrowicon}>
            <MaterialIcon name="keyboard-arrow-right" size={33} color="#9B9B9B" />
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.orders}>
          <Text style={styles.orderstitle}>Shipping addresses</Text>
          <Text style={styles.ordersdescription}>3 ddresses</Text>
          <View style={styles.arrowicon}>
            <MaterialIcon name="keyboard-arrow-right" size={33} color="#9B9B9B" />
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.orders}>
          <Text style={styles.orderstitle}>Payment methods</Text>
          <Text style={styles.ordersdescription}>Visa **34</Text>
          <View style={styles.arrowicon}>
            <MaterialIcon name="keyboard-arrow-right" size={33} color="#9B9B9B" />
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.orders}>
          <Text style={styles.orderstitle}>Promocodes</Text>
          <Text style={styles.ordersdescription}>You have special promocodes</Text>
          <View style={styles.arrowicon}>
            <MaterialIcon name="keyboard-arrow-right" size={33} color="#9B9B9B" />
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.orders}>
          <Text style={styles.orderstitle}>My reviews</Text>
          <Text style={styles.ordersdescription}>Reviews for 4 items</Text>
          <View style={styles.arrowicon}>
            <MaterialIcon name="keyboard-arrow-right" size={33} color="#9B9B9B" />
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity >
        <View style={styles.orders}>
          <Text style={styles.orderstitle}>Settings</Text>
          <Text style={styles.ordersdescription}>Notifications, password</Text>
          <View style={styles.arrowicon}>
            <MaterialIcon name="keyboard-arrow-right" size={33} color="#9B9B9B" />
          </View>
        </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  seacrchicon: {
    left: 350,
    top: 15
  },
  titlecontainer: {
    top: 5,
    left: 20
  },
  title: {
    fontSize: 38,
    fontWeight: "700",
    color: '#222222'
  },
  profileimg: {
    top: 25,
    left: 15
  },
  nametextcontainer: {
    left: 140,
    bottom: 50
  },
  nametext: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222222'
  },
  emailtext: {
    fontSize: 17,
    color: '#9B9B9B'
  },
  orders: {
    left: 19,
    top: 60
  },
  orderstitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222'
  },
  ordersdescription: {
    top: 5
  },
  arrowicon: {
    left: 330,
    bottom: 30
  },
  container2:{
    bottom:70
  }
})