import {waitFor} from '@testing-library/react-native';
import {reducer} from '../../src/test-utils/test-wrappers';
import SettingsScreen from '../../src/screens/settings/settings.screen';
import {store} from '../../src/store';
import {toggleTheme} from '../../src/store/app/app.slice';

describe('<SettingsScreen />', () => {
  beforeEach(() => {
    reducer(<SettingsScreen />);
  });

  it('should load the screen', async () => {
    store.dispatch(toggleTheme());

    await waitFor(() => {
      expect(store.getState().app.mode).toEqual('dark');
    });
  });
});
