import App from '../App';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../src/store';

jest.useFakeTimers();

describe('<App />', () => {
  test('should able to switch the theme', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // expect(store.getState().app.mode).toEqual('light');
    // act(() => {
    //   store.dispatch(toggleTheme());
    // });
    // expect(store.getState().app.mode).toEqual('dark');
  });
});
