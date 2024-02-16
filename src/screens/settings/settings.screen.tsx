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
      testID="Settings.Screen.Container"
      style={{...styles.container, backgroundColor: theme.colors.background}}>
      <Button onPress={handleThemeToggle} testID="Toggle.Theme.Button">
        Toggle Theme
      </Button>
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
