import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'

const Menscreen = () => {
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
            source={{ uri: 'https://media.istockphoto.com/id/1164889725/photo/indian-man-in-ethnic-wear.webp?b=1&s=170667a&w=0&k=20&c=_pfzPqQ5u-5zNUAqbze1RytYf8MygmK0JbrEboEa34E=' }} // Replace with your image URL
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
            source={{ uri: 'https://media.istockphoto.com/id/1410588840/photo/handsome-caucasian-male-lawyer-changing-cloths-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=2l6d5Ea6s87COt_O81VOiaxgCfdiowMhQnX2xyHgHAo=' }} // Replace with your image URL
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
            source={{ uri: 'https://media.istockphoto.com/id/912645452/photo/young-casual-man-sitting-and-fixing-pants-while-looking-away.webp?b=1&s=170667a&w=0&k=20&c=QCbUp6dg6nLJfsShb7BulhURFMoibzLEW_CWObeiahQ=' }} // Replace with your image URL
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
            source={{ uri: 'https://media.istockphoto.com/id/500873190/photo/suave-modern-man-in-casual-style.webp?b=1&s=170667a&w=0&k=20&c=ovwULIGs8C0wXwr-D63gXxtObiJ5yV5BtLkqQe6mycU=' }} // Replace with your image URL
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  </ScrollView>
  )
}

export default Menscreen

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