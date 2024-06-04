import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: '1', image: 'https://media.istockphoto.com/id/915320148/photo/elegant-young-woman-is-looking-away-smiling-and-thinking.webp?b=1&s=170667a&w=0&k=20&c=UI1F4Zw6TkiFSdeCIAj7ZxXY4JVXREu4hviYtnfcl_M=' },
  { id: '2', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
  { id: '3', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
  { id: '4', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
  { id: '5', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
  { id: '6', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
  { id: '7', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
  { id: '8', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
  { id: '9', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRzaGlydHxlbnwwfHwwfHw%3D' },
  { id: '10', image: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
];

const ViewAllSale = () => {
  
  const renderItem = ({ item }) => (

   
      <TouchableOpacity >
        <ImageBackground
          style={[styles.newimg, { opacity: 0.8 }]}
          source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
          borderRadius={25}
        >
          <Image
            style={styles.overlayImage}
            source={{ uri: item.image }}
          />
          <View style={styles.roundTextContainer}>
            <Text style={styles.roundText}>-20%</Text>
          </View>
          <View style={styles.iconContainer}>
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.brandText}>Dorothy Perkins</Text>
            <Text style={styles.productText}>Evening Dress</Text>
          </View>
          <TouchableOpacity style={styles.loveIconContainer}>
            <Icon name="heart" size={20} color="red" style={styles.loveIcon} />
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>10$</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

  );


  return (
    <View style={{ flex: 1 }}>
    {/* "New Releases" text */}
    <Text style={styles.newReleasesText}>Sale Items</Text>

    {/* FlatList */}
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.flatListContent}
      key={2}  // Added key prop to force re-render when numColumns changes
    />
  </View>
  );
}

export default ViewAllSale;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  img: {
    width: 201,
    height: 405,
    marginLeft: 5,
    marginTop: 30,
  },
  img2: {
    width: 170,
    height: 200,
    marginLeft: 5,
    marginTop: 30,
  },
  img3: {
    width: 170,
    height: 200,
    marginLeft: 5,
    marginTop: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 280,
  },
  descriptiontext: {
    marginTop: 10,
    color: "white",
    fontSize: 12,
    marginLeft: 10,
    fontWeight: '700'
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 100,
  },
  text3: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 100,
    backgroundColor: '#DB3022'
  },
  descriptiontext3: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
    marginLeft: 12,
  },
  overlayText: {
    position: 'absolute',
    top: 5,
    left: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    zIndex: 1,
  },
  newimg: {
    width: 190,
    height: 300,
    marginLeft: 5,
    marginTop: 30,

  },
  overlayImage: {
    width: 190,
    height: 200,
    position: 'absolute',
    borderRadius: 25,
  },
  iconContainer: {
    flexDirection: 'row', // Change to column
    marginTop: 205     // Align items to center
  },
  icon: {
    marginBottom: 5, // Add marginBottom to create space between icons
  },
  loveIconContainer: {
    position: 'absolute',
    top: 180,
    right: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 5,
  },
  loveIcon: {
    alignSelf: 'center',
  },
  priceText: {
    position: 'absolute',
    bottom: 10,
    right: 190,
    color: 'red',
    fontSize: 16,
  },
  brandText: {
    color: '#9B9B9B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  productText: {
    color: '#222222',
    fontSize: 21,
    fontWeight: 'bold',
  },
  textContainer: {
    position: 'absolute',
    bottom: 30,
    left: 2,
  },
  crossedText: {
    textDecorationLine: 'line-through',
  },
  priceContainer: {
    left: 32,
    top: 72,
    fontSize: 30
  },
  crossedText: {
    textDecorationLine: 'line-through',
    marginLeft: 5, // Adjust this value as needed for spacing between the texts
  },
  newtext: {
    fontSize: 43,
    fontWeight: '700',
    color: '#222222'
  },
  newtextdescription: {
    fontSize: 15,
    color: '#9B9B9B'
  },
  viewalltext: {
    fontSize: 15,
  },
  viewall: {
    marginLeft: 320,
    marginTop: -30
  },
  newcointainer: {
    marginLeft: 18,
    marginTop: 10
  },
  roundTextContainer: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 70,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  priceText1: {
    position: 'absolute',
    bottom: 10,
    right: 160,
    color: 'red',
    fontSize: 16,
  },
  roundText1: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  roundTextContainer1: {
    position: 'absolute',
    top: 15,
    left: 15,
    width: 70,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#DB3022',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText2: {
    position: 'absolute',
    bottom: 12,
    right: 160,
    color: 'red',
    fontSize: 16,
  },
  
  newReleasesText: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    color:'#222222'
  },

});

