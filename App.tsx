import StackNavigator from './src/navigations/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigations/TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}