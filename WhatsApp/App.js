import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/Pages/FirstPage';
import MessagePage from './src/Pages/MessagePage';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Messages" component={MessagePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
