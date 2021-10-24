import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

//SCREENS
import HomeScreen from "@screens/Home";

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, animationEnabled: false }}
      />
    </HomeStack.Navigator>
  );
};

export default Home;