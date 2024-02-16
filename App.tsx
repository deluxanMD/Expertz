import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/stack-navigation/stack-navigation';
import {PaperProvider} from 'react-native-paper';
import {CombinedDarkTheme, CombinedDefaultTheme} from './src/helpers/theme';
import {useSelector} from 'react-redux';
import {RootState} from './src/store';

const App = () => {
  const mode = useSelector((state: RootState) => state.app.mode);

  return (
    <PaperProvider
      theme={mode === 'light' ? CombinedDefaultTheme : CombinedDarkTheme}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
