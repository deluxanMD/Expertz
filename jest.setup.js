/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
}));
