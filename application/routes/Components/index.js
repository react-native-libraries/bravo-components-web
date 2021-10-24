import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const ComponentsStack = createStackNavigator();

//SCREENS
import OverviewScreen from "@screens/Components/Overview";
import ButtonsScreen from '@screens/Components/Buttons';

const Components = () => {
  return (
    <ComponentsStack.Navigator>
      <ComponentsStack.Screen
        name="Overview"
        component={OverviewScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <ComponentsStack.Screen
        name="Buttons"
        component={ButtonsScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </ComponentsStack.Navigator>
  );
};

export default Components;