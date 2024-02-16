import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const ProfileScreen = () => {
  const theme = useTheme();

  return (
    <View
      style={{backgroundColor: theme.colors.background, ...styles.container}}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
