import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from '../bottom-navigation/bottom-navigation';
import Login from '../../auth/login.screen';

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
