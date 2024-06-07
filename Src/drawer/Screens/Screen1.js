import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import BottomNavigation from '../../bottom/BottomNavigation'
import Icon from 'react-native-vector-icons/Ionicons';
const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.toggleDrawer()} 
        >
          <Icon name="menu-outline" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Shopi.om</Text>
        <TouchableOpacity 
          style={styles.shopButton}
          onPress={() => navigation.navigate('Shop')}
        >
         <Icon name="cart-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    <BottomNavigation/>
    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#f7fff9',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',                       
    flexDirection:'row',
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    marginLeft:15
  },
  shopButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
   
  },
  shopButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})