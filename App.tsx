import StackNavigator from './src/navigations/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Box, Checkbox, FormControl, HStack, Input, NativeBaseProvider, Stack, Text, WarningOutlineIcon } from 'native-base';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <StackNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}