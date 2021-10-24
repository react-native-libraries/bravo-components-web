import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const DashboardStack = createStackNavigator();

//SCREENS
import DashboardScreen from "@screens/Dashboard";

const Dashboard = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </DashboardStack.Navigator>
  );
};

export default Dashboard;