import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/stack-navigation/stack-navigation';

const Root = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Root);
