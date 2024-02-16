import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <View
      style={{backgroundColor: theme.colors.background, ...styles.container}}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
