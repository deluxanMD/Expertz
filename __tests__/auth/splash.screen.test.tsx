import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../../src/screens/auth/splash/splash.screen';
import {render} from '../../src/test-utils/test-wrappers';

describe('<SplashScreen />', () => {
  test('should render the screen', async () => {
    const navigateMock = jest.fn();
    const mockNavigation = {
      navigate: navigateMock,
    };

    const {getByTestId} = render(
      <NavigationContainer>
        <SplashScreen navigation={mockNavigation} />
      </NavigationContainer>,
    );

    const container = getByTestId('Splash.Screen.Container');
    const logo = getByTestId('Splash.Screen.Logo');
    const activityIndicator = getByTestId('Splash.Screen.ActivityIndicator');

    expect(container).toBeDefined();
    expect(logo).toBeDefined();
    expect(activityIndicator).toBeDefined();

    // await waitFor(
    //   () => {
    //     expect(navigateMock).toHaveBeenCalledWith('App');
    //   },
    //   {timeout: 5000},
    // );
  });
});
