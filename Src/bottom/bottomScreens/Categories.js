import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CategoriesTabs from '../CategoriesTabs/CategoriesTabs';



const Categories = ({ navigation }) => {
    return (
        <View>
            <View style={styles.headerwrapper}>
                <TouchableOpacity style={styles.AntIcons} >
                    <AntIcon name='left' size={30} color="#000" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headertitle}>Categories</Text>
                </View>
                <View style={styles.searchIcon}>
                    <MaterialIcon name="search" size={30} color="#000" />
                </View>
                <CategoriesTabs/>
            </View>
         
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    headerwrapper:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
    },
    headertitle:{
        fontSize:22,
        fontWeight:'700',
        color:'#222222'
        }
})