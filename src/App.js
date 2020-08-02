import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Note './screens' is equal to './screens/index.js'
import {
  HomeScreen,
  DetailScreen
} from './screens';

export default class App extends React.Component {
  static Stack = createStackNavigator();

  render() {
    const Stack = App.Stack;
    
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Cities' }}
          />

          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: 'Weather' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}