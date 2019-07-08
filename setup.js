import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import variables from "./native-base-theme/variables/commonColor";

import AppNavigator from './navigation/AppNavigator';


export default class Setup extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        // <View style={styles.container}>
        //   {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        //   <AppNavigator />
        // </View>
        <StyleProvider style={getTheme(variables)}>
            <AppNavigator />
        </StyleProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Roboto_medium' : require("native-base/Fonts/Roboto_medium.ttf")
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



// import React, { Component } from "react";
// import { StyleProvider } from "native-base";

// import App from "../App";
// import getTheme from "../theme/components";
// import variables from "../theme/variables/commonColor";

// export default class Setup extends Component {
//   render() {
//     return (
//       <StyleProvider style={getTheme(variables)}>
//         <App />
//       </StyleProvider>
//     );
//   }
// }
