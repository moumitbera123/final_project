import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const DoneButton = ({ onPress }) => (
  <TouchableOpacity style={styles.doneButton} onPress={onPress}>
    <Text style={styles.doneButtonText}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const navigateToMainScreen = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Onboarding
        DoneButtonComponent={(props) => (
          <DoneButton {...props} onPress={navigateToMainScreen} />
        )}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhbmRzY2FwZXxlbnwwfHx8fDE2Mjg3NjQ3MzI&ixlib=rb-1.2.1&q=80&w=1080',
                }}
                style={styles.image}
              />
            ),
            title: 'Welcome',
            subtitle: 'This is the first onboarding screen',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#f8f8f8',
            image: (
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxwYXJ0eXxlbnwwfHx8fDE2Mjg3NjQ3MzI&ixlib=rb-1.2.1&q=80&w=1080',
                }}
                style={styles.image}
              />
            ),
            title: 'Discover',
            subtitle: 'This is the second onboarding screen',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#eee',
            image: (
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI2fHxjb2Rpbmd8ZW58MHx8fHwxNjI4NzY0NzMy&ixlib=rb-1.2.1&q=80&w=1080',
                }}
                style={styles.image}
              />
            ),
            title: 'Get Started',
            subtitle: 'This is the third onboarding screen',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  doneButton: {
    marginRight: 10,
    padding: 10,
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
