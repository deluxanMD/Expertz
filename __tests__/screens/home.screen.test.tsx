import {NavigationContainer} from '@react-navigation/native';
import {reducer} from '../../src/test-utils/test-wrappers';
import HomeScreen from '../../src/screens/home/home.screen';

describe('<HomeScreen />', () => {
  test('should render the screen', () => {
    const {getByTestId} = reducer(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );

    const container = getByTestId('Home.Screen.Container');

    expect(container).toBeDefined();
  });
});
