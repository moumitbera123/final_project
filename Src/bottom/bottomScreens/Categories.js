import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CategoriesTabs from '../CategoriesTabs/CategoriesTabs';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerwrapper}>
        <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.goBack()}>
          <AntIcon name="left" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headertitle}>Categories</Text>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialIcon name="search" size={30} color="#000" /> 
        </TouchableOpacity>
      </View>
      <CategoriesTabs />
    </View>
  );
};

export default Categories;

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
});
