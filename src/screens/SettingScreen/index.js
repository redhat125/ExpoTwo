import SettingScreen from "./SettingScreen.js";
import { createStackNavigator } from "react-navigation";
export default (DrawNav = createStackNavigator(
  {
    Setting: { screen: SettingScreen }
  },
  {
    initialRouteName: "Setting"
  }
));
