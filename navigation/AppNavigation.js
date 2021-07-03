import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from "../screens/Login";
import RegistrosScreen from "../screens/Registros";
import CalculatorScreen from "../screens/Calculator";

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Registro: {
    screen: RegistrosScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Calculator: {
    screen: CalculatorScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(AppNavigator);
