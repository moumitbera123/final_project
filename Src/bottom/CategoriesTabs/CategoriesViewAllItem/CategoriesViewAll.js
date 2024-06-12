import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const CategoriesViewAll = () => {
    const navigation = useNavigation();

    const navigatetoCategoriesViewAll = () => {
        navigation.navigate('Categories');
    };
    const navigatetoWomenitemscreen = () =>{
        navigation.navigate('Womenitem');
    }
    return (

        <View style={styles.container}>
            <View style={styles.headerwrapper}>
                <TouchableOpacity style={styles.iconWrapper} onPress={navigatetoCategoriesViewAll}>
                    <AntIcon name="left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headertitle}>Categories</Text>
                <TouchableOpacity style={styles.iconWrapper}>
                    <MaterialIcon name="search" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.saveButton} >
                <Text style={styles.saveText}>VIEW ALL ITEMS</Text>
            </TouchableOpacity>
            <View style={styles.choosecategory}>
                <Text style={styles.choosecategoryText}>Choose Category</Text>
            </View>
            <View style={styles.categorieitem}>
                <TouchableOpacity onPress={navigatetoWomenitemscreen}>
                    <Text style={styles.categorietext}>Tops</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Shirts & Blouses</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Cardigans & Sweaters</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Knitwear</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Blazers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Outerwear</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Pants</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Jeans</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Skirts</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorietext}>Dresses</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default CategoriesViewAll

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerwrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    iconWrapper: {
        padding: 10,
    },
    headertitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#222222',
    },
    saveButton: {
        backgroundColor: '#DB3022',
        borderRadius: 25,
        marginLeft: 30,
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
    choosecategory: {
        marginVertical: 20,
        marginHorizontal: 40,
    },
    choosecategoryText: {
        fontSize: 16
    },
    categorieitem: {
        marginLeft: 50,
        padding: 10
    },
    categorietext: {
        marginBottom: 25,
        fontSize: 20,
        fontWeight: '500'
    }
})