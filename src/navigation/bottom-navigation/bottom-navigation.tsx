import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../../screens/home/home.screen';
import ProfileScreen from '../../screens/profile/profile.screen';
import SettingsScreen from '../../screens/settings/settings.screen';
import {useTheme} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      barStyle={{backgroundColor: theme.colors.background, ...styles.barStyle}}
      labeled={false}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="settings" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    height: 80,
    elevation: 10,
  },
});

export default BottomNavigation;
