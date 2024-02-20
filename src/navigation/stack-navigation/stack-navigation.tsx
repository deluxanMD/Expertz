import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from '../bottom-navigation/bottom-navigation';
import SplashScreen from '../../screens/auth/splash/splash.screen';

const Stack = createNativeStackNavigator();

const screenOptions = {headerShown: false};

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="App" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
