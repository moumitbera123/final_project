import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeBanner = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.overlayText}>More for you</Text>
            </View>
            <TouchableOpacity>

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
                <TouchableOpacity>

                    <ImageBackground
                        style={[styles.img2, { opacity: 0.8 }]}
                        source={{ uri: 'https://media.istockphoto.com/id/1358210308/photo/top-view-of-smiling-family-of-four-having-fun-and-relaxing-in-indoor-swimming-pool-at-hotel.webp?b=1&s=170667a&w=0&k=20&c=qt6JVayeC1wHbawKTXbDKcQLVNUyr63XbEw-EDJxp3k=' }}
                        borderRadius={25}
                    >



                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity>

                    <ImageBackground
                        style={[styles.img3, { opacity: 0.8 }]}
                        source={{ uri: 'https://media.istockphoto.com/id/1157979674/photo/cheerful-man-is-using-modern-technologies-in-hotel-room.webp?b=1&s=170667a&w=0&k=20&c=DGKJUkyGDElgXiAL2VpN-SRVAxLysORtQ9BrKA-JjyE=' }}
                        borderRadius={25}
                    >
                        <Text style={styles.text3}>Maximizing one-day business trips</Text>
                        <Text style={styles.descriptiontext3}>5 reasons why staying in a hotel between meetings</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeBanner;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        width: 201,
        height: 405,
        marginLeft: 5,
        marginTop: 250,
    },
    img2: {
        width: 170,
        height: 200,
        marginLeft: 5,
        marginTop: 250,

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
        color:"white" ,
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
        // backgroundColor:'white'
    },
    overlayText: {
        position: 'absolute',
        top: 220,
        left: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        zIndex: 1,
    },

});
