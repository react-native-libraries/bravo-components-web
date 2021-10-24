import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//STACKS
import Home from '@routes/Home'
import Dashboard from '@routes/Dashboard';
import Artifacts from '@routes/Artifacts';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="Artifacts"
          component={Artifacts}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

