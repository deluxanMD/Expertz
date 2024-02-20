import {screen} from '@testing-library/react-native';
import {reducer} from '../../src/test-utils/test-wrappers';
import LoginScreen from '../../src/screens/auth/login/login.screen';

describe('<SettingsScreen />', () => {
  beforeEach(() => {
    reducer(<LoginScreen />);
  });

  it('should load the screen', async () => {
    expect(screen.getByTestId('Login.Screen.Container')).toBeDefined();
  });
});
