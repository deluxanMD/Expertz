import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';

type SplashScreenProps = {
  navigation: any;
};

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const navigateToWelcome = setTimeout(() => {
      navigation.navigate('App');
    }, 1000);

    return () => clearTimeout(navigateToWelcome);
  });

  return (
    <View style={styles.container} testID="Splash.Screen.Container">
      <Image
        source={require('../../../assets/images/expertz-logo.png')}
        style={styles.logo}
        testID="Splash.Screen.Logo"
      />
      <ActivityIndicator
        size="large"
        testID="Splash.Screen.ActivityIndicator"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 350,
  },
});
