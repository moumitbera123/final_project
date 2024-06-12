import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'

const KidsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <View style={styles.box}> 
      <Text style={styles.boxText}>SUMMER SALES</Text>
      <Text style={styles.boxTextDescription}>Upto 50% off</Text>
    </View>
    <TouchableOpacity>
      <View style={styles.box1}>
        <View style={styles.row}>
          <Text style={styles.boxText1}>New</Text>
          <Image 
            source={{ uri: 'https://media.istockphoto.com/id/1152823482/photo/stylish-child-smiling-and-dancing.webp?b=1&s=170667a&w=0&k=20&c=Wlc3UPH_WAfGKWMTknCZLTLrrcBsgdyCGuM-J7qYGW0=' }} // Replace with your image URL
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.box1}>
        <View style={styles.row}>
          <Text style={styles.boxText1}>Clothes</Text>
          <Image 
            source={{ uri: 'https://media.istockphoto.com/id/931577634/photo/soft-focus-of-a-two-years-old-child-choosing-her-own-dresses-from-kids-cloth-rack.webp?b=1&s=170667a&w=0&k=20&c=fk2S1sXIoZDlsGv3lOm0m88qhMBlo67OtTZpt6eh_jE=' }} // Replace with your image URL
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.box1}>
        <View style={styles.row}>
          <Text style={styles.boxText1}>Shoes</Text>
          <Image 
            source={{ uri: 'https://media.istockphoto.com/id/1158747485/photo/mature-woman-shopping-for-shoes-for-her-son.webp?b=1&s=170667a&w=0&k=20&c=mFrX0Hpf3TOAjjPNAB1xZ0xCqFPzfBNm77FkSiV40rg=' }} // Replace with your image URL
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View style={styles.box1}>
        <View style={styles.row}>
          <Text style={styles.boxText1}>Accesories</Text>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1484820540004-14229fe36ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWNjZXNvcmllcyUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D' }} // Replace with your image URL
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  </ScrollView>
  )
}

export default KidsScreen

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: '90%',
    backgroundColor: '#DB3022',
    borderRadius: 10,
    marginVertical: 20,
    marginLeft: 20
  },
  boxText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white', // You can change the text color as needed
  },
  boxTextDescription: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  box1: {
    height: 120,
    width: '90%',
    borderRadius: 10,
    marginVertical: 20,
    marginLeft: 20
  },
  boxText1: {
    color: '#222222',
    fontSize: 26,
    fontWeight: '700',
    marginLeft: 10
  },
  image: {
    height: 120,
    width: '50%',
    borderRadius: 10, // Adjust the size of the image as needed
  },
})