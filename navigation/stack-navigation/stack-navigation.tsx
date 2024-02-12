import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/login.screen';
import BottomNavigation from '../bottom-navigation/bottom-navigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="App"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
