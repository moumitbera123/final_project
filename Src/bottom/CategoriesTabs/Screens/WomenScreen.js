import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const WomenScreen = () => {
  const navigation = useNavigation();
  const navigateToViewAllScreen =()=>{
    navigation.navigate('CategoriesViewAll')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={styles.box}> 
        <Text style={styles.boxText}>SUMMER SALES</Text>
        <Text style={styles.boxTextDescription}>Upto 50% off</Text>
      </View>
      <TouchableOpacity onPress={navigateToViewAllScreen}>
        <View style={styles.box1}>
          <View style={styles.row}>
            <Text style={styles.boxText1}>New</Text>
            <Image 
              source={{ uri: 'https://media.istockphoto.com/id/1279626140/photo/full-size-photo-adorable-sweet-careless-girl-lady-look-down-hands-side-prom-party-dress-air.webp?b=1&s=170667a&w=0&k=20&c=Fo97FoYE0xXqrcE8EKgCeJ0np9rhb3Vn2PZJ8RG1QKg=' }} // Replace with your image URL
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
              source={{ uri: 'https://plus.unsplash.com/premium_photo-1713820020904-4ec446b3c714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhzJTIwd29tZW58ZW58MHx8MHx8fDA%3D' }} // Replace with your image URL
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
              source={{ uri: 'https://media.istockphoto.com/id/1295853778/photo/happy-blonde-model-girl-with-a-shiny-smile-in-beige-blouse-and-fashionable-pink-sunglasses.webp?b=1&s=170667a&w=0&k=20&c=T51mScy_ytw_CMA6gC0zfwpowbCeulDwkVAejd2gLvk=' }} // Replace with your image URL
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
              source={{ uri: 'https://media.istockphoto.com/id/1180931397/photo/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-earrings-elegant-evening.webp?b=1&s=170667a&w=0&k=20&c=b9uxuFgAhUT72UeOPoth99uZDZXq2EZnDksRWqKeGdc=' }} // Replace with your image URL
              style={styles.image}
            />
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WomenScreen;

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
});
