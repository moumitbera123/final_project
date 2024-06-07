import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useNavigation } from '@react-navigation/native';

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
            <View style={styles.searchIcon}>
                <MaterialIcon name="search" size={32} color="#000" />
            </View>
            <TouchableOpacity style={styles.AntIcons} onPress={navigatetoProfileScreeen}>
                <AntIcon name='left' size={30} color="#000" />
            </TouchableOpacity>
            <View style={styles.section}>
                <Text style={styles.heading}>Settings</Text>
                <Text style={styles.subHeading}>Personal Information</Text>
                <TextInput style={styles.input} placeholder='Full name' />
                <TextInput style={styles.input} placeholder='Date of Birth' />
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Password</Text>
                <TouchableOpacity style={styles.changeButton} onPress={openBottomSheet}>
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder='Password' secureTextEntry />
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Notifications</Text>
                <Text>Sales</Text>
                <Text>New arrivals</Text>
                <Text>Delivery status changes</Text>
            </View>

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
                        <View style={styles.input1}>
                            <TextInput placeholder='Old Password' style={styles.input} />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.changeButton} >
                                <Text style={styles.changeText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.input2} >
                        <TextInput placeholder='New Password' style={styles.input}/>
                        </View>
                        <View >
                        <TextInput placeholder=' Repeat New Password' style={styles.input}/>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.saveButton} onPress={() => refRBSheet.current.close()}>
                        <Text style={styles.saveText}>Save Password</Text>
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
    searchIcon: {
        alignSelf: 'flex-end',
    },
    AntIcons: {
        marginVertical: 10,
    },
    section: {
        marginVertical: 60,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: 16,
        marginVertical: 10,
    },
    input: {
        width: '100%',
        fontSize: 19,
        color: '#9B9B9B',
    },
    // changeButton: {
    //     backgroundColor: '#9B9B9B',

    // },
    changeText: {
        color: '#9B9B9B',
        fontSize: 12,
        marginLeft: 290,
        marginTop: -25
    },
    bottomSheetContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSheetHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 90,
        marginTop: -20,
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
    input1:{
        marginBottom:120,
    },
    input2:{
        marginBottom:50,
    },

});
