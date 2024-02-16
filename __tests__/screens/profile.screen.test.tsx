import {reducer} from '../../src/test-utils/test-wrappers';
import ProfileScreen from '../../src/screens/profile/profile.screen';
import {screen} from '@testing-library/react-native';

describe('<SettingsScreen />', () => {
  beforeEach(() => {
    reducer(<ProfileScreen />);
  });

  it('should load the screen', async () => {
    expect(screen.getByTestId('Profile.Screen.Container')).toBeDefined();
  });
});
