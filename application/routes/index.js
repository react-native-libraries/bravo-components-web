import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//STACKS
import Home from '@routes/Home'
import Dashboard from '@routes/Dashboard';
import Artifacts from '@routes/Artifacts';
import Components from '@routes/Components';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'TESTE', headerShown: false, animationEnabled: false }}
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
        <Stack.Screen
          name="Components"
          component={Components}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

export const routes = [
  {
      title: 'Home',
      route: 'Home'
  },
  {
      title: 'Dashboard',
      route: 'Dashboard'
  },
  {
      title: 'Artefatos',
      multi: true,
      navigator: 'Artifacts',
      routes: [
          {
              title: 'Overview',
              route: 'Overview'
          },
          {
              title: 'Evolog Motorista',
              route: 'EvologMotorista'
          },
          {
              title: 'Evolog Checklist',
              route: 'EvologChecklist'
          },
          {
              title: 'Evolog Comercial',
              route: 'EvologComercial'
          },
          {
              title: 'Evolog Checkin',
              route: 'EvologCheckin'
          }
      ]
  },
  {
    title: 'Componentes',
    multi: true,
    navigator: 'Components',
    routes: [
          {
              title: 'Overview',
              route: 'Overview'
          },
          {
              title: 'Botões',
              route: 'Buttons'
          },
      ]
  }
];
