import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const ArtifactsStack = createStackNavigator();

//SCREENS
import OverviewScreen from "@screens/Artifacts/Overview";
import EvologMotoristaScreen from "@screens/Artifacts/EvologMotorista";
import EvologCheckinScreen from "@screens/Artifacts/EvologCheckin";
import EvologChecklistScreen from "@screens/Artifacts/EvologChecklist";
import EvologComercialScreen from "@screens/Artifacts/EvologComercial";

const Artifacts = () => {
  return (
    <ArtifactsStack.Navigator>
      <ArtifactsStack.Screen
        name="Overview"
        component={OverviewScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <ArtifactsStack.Screen
        name="EvologMotorista"
        component={EvologMotoristaScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <ArtifactsStack.Screen
        name="EvologChecklist"
        component={EvologChecklistScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <ArtifactsStack.Screen
        name="EvologComercial"
        component={EvologComercialScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
      <ArtifactsStack.Screen
        name="EvologCheckin"
        component={EvologCheckinScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </ArtifactsStack.Navigator>
  );
};

export default Artifacts;