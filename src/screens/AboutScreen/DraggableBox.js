import React, { Component } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { SCREEN_INFO, LOCATION_CONST, GlobalVars, GlobalVars1 } from '../../AppContants/constants.js';

import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

import { LoremIpsum } from './LoremIpsum.js';

export class DraggableBox extends Component {
  constructor(props) {
    super(props);
    this._translateY = new Animated.Value(0);
    this._lastOffset = { y: 0 };
    this._onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationY: this._translateY
          },
        },
      ],
      { useNativeDriver: true }
    );
  }
  _onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastOffset.y += event.nativeEvent.translationY;
      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);
    }
  };
  render() {
    return (
      <PanGestureHandler
        onGestureEvent={this._onGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}
        activeOffsetX={SCREEN_INFO.CARD_WIDTH}
        activeOffsetY={[-10,10]}
        >
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                { translateY: this._translateY }
              ],
            }
          ]}
        >

        <LoremIpsum words={20} />
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

export class Example extends Component {
  render() {
    return (
      <View style={styles.scrollView}>
        <LoremIpsum />
        
        <LoremIpsum />

        <DraggableBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  box: {
    width: SCREEN_INFO.CARD_WIDTH,
    height: SCREEN_INFO.CARD_HEIGHT+SCREEN_INFO.CARD_HEIGHT,
    alignSelf: 'center',
    backgroundColor: 'plum',
    zIndex: 1000,
  },
});