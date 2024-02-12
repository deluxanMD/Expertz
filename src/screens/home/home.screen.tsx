import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Button} from 'react-native-paper';
import {toggleTheme} from '../../store/app/app.slice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button mode="contained" onPress={handleThemeToggle}>
        Toggle Theme
      </Button>
    </View>
  );
};

export default HomeScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
