import App from '../App';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../src/store';

jest.useFakeTimers();

describe('<App />', () => {
  it('has 1 child', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
