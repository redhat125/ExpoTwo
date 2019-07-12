import React from "react";
import MainScreen from "./MainScreen.js";
import SettingScreen from "../SettingScreen/SettingScreen.js";
import AboutScreen from "../AboutScreen/index.js";
import MapScreen from "../AnimatedMap/index.js";
import {Example} from "../AboutScreen/DraggableBox.js";
import DrawerScreen from "../DrawerScreen/DrawerScreen.js";
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

const MainScreenRouter = createDrawerNavigator(
    {
      Main: { screen: MainScreen },
      Setting: { screen: SettingScreen },
      About: { screen: AboutScreen },
      MapScreen: { screen: MapScreen}
    },
    {
      contentComponent: props => <DrawerScreen {...props} />
    }
  );
export default MainScreenRouter;
