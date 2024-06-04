import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const HomeBanner = () => {
  const navigation = useNavigation();
  const navigateToviewallNew = () =>{
    navigation.navigate('ViewAllNew');
  }
  const navigateToviewallSale = () =>{
    navigation.navigate('ViewAllSale');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.overlayText}>More for you</Text>
        </View>

        <TouchableOpacity onPress={() => { }}>
          <ImageBackground
            style={[styles.img, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1454662719/photo/african-american-tourists-with-suitcases-in-front-of-the-rented-apartment.webp?b=1&s=170667a&w=0&k=20&c=0gDMkmXBYiwcQ3Gc9loQ7--kaN38Wb9UQWWSSw8czqE=' }}
            borderRadius={25}
          >
            <Text style={styles.text}>Keeping the spark alive</Text>
            <Text style={styles.descriptiontext}>The perfect hotel experience for couples</Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.column}>
          <TouchableOpacity onPress={() => { }}>
            <ImageBackground
              style={[styles.img2, { opacity: 0.8 }]}
              source={{ uri: 'https://media.istockphoto.com/id/1358210308/photo/top-view-of-smiling-family-of-four-having-fun-and-relaxing-in-indoor-swimming-pool-at-hotel.webp?b=1&s=170667a&w=0&k=20&c=qt6JVayeC1wHbawKTXbDKcQLVNUyr63XbEw-EDJxp3k=' }}
              borderRadius={25}
            >
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <View>
              <ImageBackground
                style={[styles.img3, { opacity: 0.8 }]}
                source={{ uri: 'https://media.istockphoto.com/id/1157979674/photo/cheerful-man-is-using-modern-technologies-in-hotel-room.webp?b=1&s=170667a&w=0&k=20&c=DGKJUkyGDElgXiAL2VpN-SRVAxLysORtQ9BrKA-JjyE=' }}
                borderRadius={25}
              >
                <Text style={styles.text3}>Maximizing one-day business trips</Text>
                <Text style={styles.descriptiontext3}>5 reasons why staying in a hotel between meetings</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>

      </View>

      {/* ................................................. */}
      <View>
        <View style={styles.newcointainer}>
          <Text style={styles.newtext}>New</Text>
          <Text style={styles.newtextdescription}>You've never seen it before!</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.viewall} onPress={navigateToviewallNew}>
            <Text style={styles.viewalltext}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' }}
            />
            <View style={styles.roundTextContainer}>
              <Text style={styles.roundText}>NEW</Text>
            </View>
            <View style={styles.iconContainer}>
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />      
  

            </View>
            <View style={styles.textContainer}>
              <Text style={styles.brandText}>Mango Boy</Text>
              <Text style={styles.productText}>T-Shirt Sailing</Text>
            </View>
            <TouchableOpacity style={styles.loveIconContainer}>
              <Icon name="heart" size={20} color="red" style={styles.loveIcon} />
            </TouchableOpacity>
            {/* <Text style={[styles.priceText, styles.crossedText]}>$15</Text> */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>10$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D' }}
            />
            <View style={styles.roundTextContainer}>
              <Text style={styles.roundText}>NEW</Text>
            </View>
            <View style={styles.iconContainer}>
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />  
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.brandText}>Mango Boy</Text>
              <Text style={styles.productText}>T-Shirt Sailing</Text>
            </View>
            <TouchableOpacity style={styles.loveIconContainer}>
              <Icon name="heart" size={20} color="red" style={styles.loveIcon} />
            </TouchableOpacity>
            {/* <Text style={[styles.priceText, styles.crossedText]}>$15</Text> */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>10$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' }}
            />
            <View style={styles.roundTextContainer}>
              <Text style={styles.roundText}>NEW</Text>
            </View>
            <View style={styles.iconContainer}>
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />  
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.brandText}>Mango Boy</Text>
              <Text style={styles.productText}>T-Shirt Sailing</Text>
            </View>
            <TouchableOpacity style={styles.loveIconContainer}>
              <Icon name="heart" size={20} color="red" style={styles.loveIcon} />
            </TouchableOpacity>
            {/* <Text style={[styles.priceText, styles.crossedText]}>$15</Text> */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>10$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVuJTIwdHNoaXJ0fGVufDB8fDB8fHww' }}
            />
            <View style={styles.roundTextContainer}>
              <Text style={styles.roundText}>NEW</Text>
            </View>
            <View style={styles.iconContainer}>
            <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />     
              <MaterialIcon name="star" size={20} color="#ffa200" style={styles.icon} />  
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.brandText}>Mango Boy</Text>
              <Text style={styles.productText}>T-Shirt Sailing</Text>
            </View>
            <TouchableOpacity style={styles.loveIconContainer}>
              <Icon name="heart" size={20} color="red" style={styles.loveIcon} />
            </TouchableOpacity>
            {/* <Text style={[styles.priceText, styles.crossedText]}>$15</Text> */}
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>10$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </ScrollView>



        {/* Sale container */}
      </View>
      <View>
        <View style={styles.newcointainer}>
          <Text style={styles.newtext}>Sale</Text>
          <Text style={styles.newtextdescription}>Super summer sale</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.viewall} onPress={ navigateToviewallSale}>
            <Text style={styles.viewalltext}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://media.istockphoto.com/id/915320148/photo/elegant-young-woman-is-looking-away-smiling-and-thinking.webp?b=1&s=170667a&w=0&k=20&c=UI1F4Zw6TkiFSdeCIAj7ZxXY4JVXREu4hviYtnfcl_M=' }}
            />
            <View style={styles.roundTextContainer1}>
              <Text style={styles.roundText1}>-20%</Text>
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
            <Text style={[styles.priceText1, styles.crossedText]}>$15</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText2}>12$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://media.istockphoto.com/id/915320148/photo/elegant-young-woman-is-looking-away-smiling-and-thinking.webp?b=1&s=170667a&w=0&k=20&c=UI1F4Zw6TkiFSdeCIAj7ZxXY4JVXREu4hviYtnfcl_M=' }}
            />
            <View style={styles.roundTextContainer1}>
              <Text style={styles.roundText1}>-20%</Text>
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
            <Text style={[styles.priceText1, styles.crossedText]}>$15</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText2}>12$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://media.istockphoto.com/id/915320148/photo/elegant-young-woman-is-looking-away-smiling-and-thinking.webp?b=1&s=170667a&w=0&k=20&c=UI1F4Zw6TkiFSdeCIAj7ZxXY4JVXREu4hviYtnfcl_M=' }}
            />
            <View style={styles.roundTextContainer1}>
              <Text style={styles.roundText1}>-20%</Text>
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
            <Text style={[styles.priceText1, styles.crossedText]}>$15</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText2}>12$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
          <ImageBackground
            style={[styles.newimg, { opacity: 0.8 }]}
            source={{ uri: 'https://media.istockphoto.com/id/1370544962/photo/white-paper-background-fibrous-cardboard-texture-for-scrapbooking.webp?b=1&s=170667a&w=0&k=20&c=xr9AiLxrwsEeG2heLhc7tGqgBYOtdQBb1EH2LLETxRc=' }}
            borderRadius={25}
          >
            <Image
              style={styles.overlayImage}
              source={{ uri: 'https://media.istockphoto.com/id/915320148/photo/elegant-young-woman-is-looking-away-smiling-and-thinking.webp?b=1&s=170667a&w=0&k=20&c=UI1F4Zw6TkiFSdeCIAj7ZxXY4JVXREu4hviYtnfcl_M=' }}
            />
            <View style={styles.roundTextContainer1}>
              <Text style={styles.roundText1}>-20%</Text>
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
            <Text style={[styles.priceText1, styles.crossedText]}>$15</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText2}>12$</Text>
            </View>
          </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  // column: {
  //     flex: 1,
  //     alignItems: 'center',
  // },
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
    color: '#222222 ',
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
    backgroundColor: '#222222',
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
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF'
  },
  roundTextContainer1:{
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
  priceText2:{
    position: 'absolute',
    bottom: 12,
    right: 160,
    color: 'red',
    fontSize: 16,
  }
});













// /* eslint-disable react-native/no-inline-styles */
// import { View, Dimensions, StyleSheet, Image, TouchableOpacity, Text, ActivityIndicator, ScrollView } from 'react-native';
// import React from 'react';
// import Carousel, { Pagination } from 'react-native-snap-carousel';

// export default props => {
//   const photos = props.bannerData || sliderimage;
//   const isCarousel = React.useRef(null);
//   const width = Dimensions.get('window').width;
//   const [index, setIndex] = React.useState(0);

//   const renderCarouselItem = ({ item, index }) => {
//     return (
//       <TouchableOpacity>
//         <Image
//           source={{ uri: item.imgUrl }}
//           style={{ width: 300, height: 150, marginLeft: 0, borderRadius: 10 }}
//           resizeMode={'cover'}
//         />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <ScrollView horizontal={false}> {/* Wrap the Carousel with ScrollView */}
//       {photos ?
//         <View>
//           <Carousel
//             data={photos}
//             sliderWidth={width}
//             itemWidth={300}
//             itemHeight={200}
//             style={{ marginBottom: 0 }}
//             renderItem={renderCarouselItem}
//             onSnapToItem={(index) => setIndex(index)}
//             useScrollView={true}
//             layout={'default'}
//             ref={isCarousel}
//             loop
//             autoplay
//             autoplayDelay={5000}
//             autoplayInterval={3000}
//             enableSnap={true}
//           />
//           <Pagination dotContainerStyle={{ height: 0, bottom: '3%' }}
//             dotsLength={photos.length}
//             activeDotIndex={index}
//             carouselRef={isCarousel}
//             dotStyle={{
//               width: 13,
//               height: 6,
//               borderRadius: 5,
//               marginHorizontal: 0,
//               backgroundColor: '#FE4500',
//             }}
//             inactiveDotOpacity={0.4}
//             inactiveDotScale={0.6}
//             tappableDots={true}
//           />
//         </View> :
//         <View style={{ width: '100%', height: '100%' }}>
//           <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 30, color: '#FE4500', alignSelf: 'center' }}>Hold on. We're looking for the best deals!</Text>
//           <ActivityIndicator size="large" color='#FE4500' style={{ marginTop: 20 }} />
//         </View>}
//     </ScrollView>
//   );
// };

// const sliderimage = [
//   {
//     title: 'Aenean leo',
//     body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
//     imgUrl: 'https://picsum.photos/id/11/200/300',
//   },
//   {
//     title: 'In turpis',
//     body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis.',
//     imgUrl: 'https://picsum.photos/id/10/200/300',
//   },
//   {
//     title: 'Lorem Ipsum',
//     body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
//     imgUrl: 'https://picsum.photos/id/12/200/300',
//   },
// ];
// const styles = StyleSheet.create({})



// MyImageSlider.js
// import React from 'react';
// import { View, Dimensions, StyleSheet, Image, TouchableOpacity, Text, ActivityIndicator, ScrollView } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';

// const HomeBanner = (props) => {
//   const photos = props.bannerData || Sliderimage;
//   const isCarousel = React.useRef(null);
//   const width = Dimensions.get('window').width;
//   const [index, setIndex] = React.useState(0);

//   const renderCarouselItem = ({ item, index }) => {
//     return (
//       <TouchableOpacity>
//         <Image
//           source={{ uri: item.imgUrl }}
//           style={{ width: 300, height: 150, marginLeft: 0, borderRadius: 10 }}
//           resizeMode={'cover'}
//         />
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <ScrollView horizontal={false}> {/* Wrap the Carousel with ScrollView */}
//       {photos.length > 0 ? (
//         <View>
//           <Carousel
//             data={photos}
//             sliderWidth={width}
//             itemWidth={300}
//             itemHeight={200}
//             style={{ marginBottom: 0 }}
//             renderItem={renderCarouselItem}
//             onSnapToItem={(index) => setIndex(index)}
//             useScrollView={true}
//             layout={'default'}
//             ref={isCarousel}
//             loop
//             autoplay
//             autoplayDelay={5000}
//             autoplayInterval={3000}
//             enableSnap={true}
//           />
//           <Pagination
//             dotContainerStyle={{ height: 0, bottom: '3%' }}
//             dotsLength={photos.length}
//             activeDotIndex={index}
//             carouselRef={isCarousel}
//             dotStyle={{
//               width: 13,
//               height: 6,
//               borderRadius: 5,
//               marginHorizontal: 0,
//               backgroundColor: '#FE4500',
//             }}
//             inactiveDotOpacity={0.4}
//             inactiveDotScale={0.6}
//             tappableDots={true}
//           />
//         </View>
//       ) : (
//         <View style={{ width: '100%', height: '100%' }}>
//           <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 30, color: '#FE4500', alignSelf: 'center' }}>
//             Hold on. We're looking for the best deals!
//           </Text>
//           <ActivityIndicator size="large" color="#FE4500" style={{ marginTop: 20 }} />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const Sliderimage = [
//   {
//     title: 'Aenean leo',
//     body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
//     imgUrl: 'https://picsum.photos/id/11/200/300',
//   },
//   {
//     title: 'In turpis',
//     body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis.',
//     imgUrl: 'https://picsum.photos/id/10/200/300',
//   },
//   {
//     title: 'Lorem Ipsum',
//     body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
//     imgUrl: 'https://picsum.photos/id/12/200/300',
//   },
// ];

// export default HomeBanner;
