import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleTheme} from '../../store/app/app.slice';
import {Button, useTheme} from 'react-native-paper';

const SettingsScreen = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <View
      style={{backgroundColor: theme.colors.background, ...styles.container}}>
      <Button onPress={handleThemeToggle}>Toggle Theme</Button>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
