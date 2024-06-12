import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
const Womenitem = () => {
    const navigation = useNavigation();
    const navigatetoCategoriesViewAll = () =>{
        navigation.navigate('CategoriesViewAll');
    }
  return (
    <View style={styles.container}>
   <View style={styles.headerwrapper}>
                <TouchableOpacity style={styles.iconWrapper} onPress={navigatetoCategoriesViewAll}>
                    <AntIcon name="left" size={30} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headertitle}>Women’s tops</Text>
                <TouchableOpacity style={styles.iconWrapper}>
                    <MaterialIcon name="search" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.ItemButtonWrapper}  >
                <TouchableOpacity style={styles.ItemButton}>
                    <Text style={styles.ItemButtonText}>T-shirts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ItemButton}>
                    <Text style={styles.ItemButtonText}>Sleeveless</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ItemButton}>
                    <Text style={styles.ItemButtonText}>Shirts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ItemButton}>
                    <Text style={styles.ItemButtonText}>Blouses</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ItemButton}>
                    <Text style={styles.ItemButtonText}>Shorts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ItemButton}>
                    <Text style={styles.ItemButtonText}>Skirts</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View>
     
            </View>
    </View>
  )
}

export default Womenitem

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
    ItemButton: {
        backgroundColor: '#222222',
        borderRadius: 25,
        marginLeft: 22,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 40,
        
      },
      ItemButtonText:{
        color:'#FFFFFF'
      },
      ItemButtonWrapper:{
        flexDirection:'row'
      }
})