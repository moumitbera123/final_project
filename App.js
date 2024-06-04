
import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppNavigator from './Src/AppNavigator';


const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
