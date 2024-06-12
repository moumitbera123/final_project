import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const SettingsScreen = () => {
    const navigation = useNavigation();
    const refRBSheet = useRef();

    const navigatetoProfileScreeen = () => {
        navigation.navigate('MainScreen');
    };

    const openBottomSheet = () => {
        refRBSheet.current.open();
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.Iconwrapper}>
                <TouchableOpacity style={styles.AntIcons} onPress={navigatetoProfileScreeen}>
                <AntIcon name='left' size={30} color="#000" />
            </TouchableOpacity>
            <View style={styles.searchIcon}>
                <MaterialIcon name="search" size={32} color="#000" />
            </View>
        
            </View>
            <View style={styles.section}>
                <Text style={styles.heading1}>Settings</Text>
                <Text style={styles.subHeading}>Personal Information</Text>
                <TextInput style={styles.input1} placeholder='Full name' />
                <TextInput style={styles.input1} placeholder='Date of Birth' />
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Password</Text>
                <TouchableOpacity style={styles.changeButton} onPress={openBottomSheet}>
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
                <TextInput style={styles.input1} placeholder='Password' secureTextEntry />
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Notifications</Text>
                <Text style={styles.notificationtext}>Sales</Text>
                <Text style={styles.notificationtext}>New arrivals</Text>
                <Text style={styles.notificationtext}>Delivery status changes</Text>
            </View>
            </ScrollView>
            <RBSheet
                ref={refRBSheet}
                height={600}

                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }}
            >
                <View style={styles.bottomSheetContent}>
                    <Text style={styles.bottomSheetHeading}> Password Change</Text>
                    {/*              
                    <View style={styles.section}>
                    <TextInput style={[styles.input, styles.marginBottom]} placeholder=' old Password' secureTextEntry />
                        <TouchableOpacity style={styles.changeButton} >
                            <Text style={styles.changeText}>Forgot Password?</Text>
                        </TouchableOpacity>  
                        <TextInput style={[styles.input, styles.marginBottom]} placeholder='new Password' secureTextEntry />
                    <TextInput style={[styles.input, styles.marginBottom]} placeholder=' Repeat New Password' secureTextEntry />
                    </View> */}
                    <View>
                        <View style={styles.input3}>
                            <TextInput placeholder='Old Password' style={styles.input} />
                        </View>
                        <View  style={styles.changeButton}>
                            <TouchableOpacity >
                                <Text style={styles.changeText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View  style={styles.input3} >
                        <TextInput placeholder='New Password' style={styles.input}/>
                        </View>
                        <View  style={styles.input3}>
                        <TextInput placeholder=' Repeat New Password' style={styles.input}/>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.saveButton} onPress={() => refRBSheet.current.close()}>
                        <Text style={styles.saveText}>SAVE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    Iconwrapper:{
        flexDirection:'row'
    },
    searchIcon: {
    marginLeft:280
    },
    // AntIcons: {
    //     marginVertical: 10,
    // },
    section: {
        marginVertical: 30,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'#222222'
    },
    subHeading: {
        fontSize: 18,
        marginVertical: 10,
        color: '#222222'
    },
    input: {
        width: '100%',
        fontSize: 17,
        color: '#9B9B9B',
    },
    changeButton: {
      marginRight:5
    },
    changeText: {
        fontSize: 15,
        marginLeft: 250,
        
    },
    bottomSheetContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheetHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 50,
        marginTop: -30,
        color:'#222222'
    },
    saveButton: {
        backgroundColor: '#DB3022',
        borderRadius: 25,
        marginLeft: 10,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 343,
        height: 58,
    },
    saveText: {
        color: '#fff',
        fontSize: 16,
    },
    marginBottom: {
        marginBottom: 10,
    },
    input3:{
       marginTop:50,
       marginLeft:20
    },
    // input2:{
    //     marginBottom:50,
    // },
    notificationtext:{
        fontSize:18,
       marginTop:19
    },
    input1:{
        marginLeft:20,
        marginTop:30
    },
    heading1:{
        fontSize:50,
         fontWeight: 'bold',
        color:'#222222'
    }
});
