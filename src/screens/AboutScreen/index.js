import AboutScreen from "./AboutScreen.js";
import { createStackNavigator } from "react-navigation";
export default (AboutNav = createStackNavigator(
  {
    About: { screen: AboutScreen }
  },
  {
    initialRouteName: "About"
  }
));
