import React from 'react';
import {Provider} from 'react-redux';
import {render, fireEvent} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../../src/screens/settings/settings.screen';
import appReducer, {initialState} from '../../src/store/app/app.slice';

const Stack = createNativeStackNavigator();

describe('MyComponent', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {app: appReducer} as any,
      preloadedState: {app: {...initialState}},
    });
  });

  test('should update Redux state on button click', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>,
    );

    const button = getByTestId('Toggle.Theme.Button');
    fireEvent(button, 'press');
    expect(store.getState().app.mode).toEqual('dark');
    fireEvent(button, 'press');
    expect(store.getState().app.mode).toEqual('light');
  });
});
