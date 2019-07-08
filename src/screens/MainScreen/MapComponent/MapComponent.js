import React from "react";
import { MapView } from 'expo';
import { connect } from 'react-redux';
import {getAllVendorList} from '../../../AppUtils/Actions/vendorActions.js';
import { SCREEN_INFO, GlobalVars, GlobalVars1 } from '../../../AppContants/constants.js';
import { StyleSheet, Text, View, Animated, Image, Dimensions } from "react-native";




class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        //GlobalVars1.MapAnimation = new Animated.Value(0);
    }

      componentDidMount() {
        this.props.getAllVendorList();
        console.log("getAllVendorList action triggered around "+ JSON.stringify(this.props.mapData.userLocation));
      }



      shouldComponentUpdate(){
        console.log("shouldComponentUpdate ecex "+ JSON.stringify(this.props.vendorListData.filteredVendorList));
        return true;
      }
      
      componentWillUpdate(){
        console.log("componentWillUpdate exec "+ JSON.stringify(this.props.vendorListData.filteredVendorList));
      }
      
      componentDidUpdate(){
        console.log("componentDidUpdate exec "+ JSON.stringify(this.props.vendorListData.filteredVendorList));
      }




      render() {
        const interpolations = this.props.vendorListData.filteredVendorList.map((marker, index) => {
          const inputRange = [
            (index - 1) * SCREEN_INFO.CARD_WIDTH,
            index * SCREEN_INFO.CARD_WIDTH,
            ((index + 1) * SCREEN_INFO.CARD_WIDTH),
          ];
          const scale = GlobalVars.MapAnimation.interpolate({
            inputRange,
            outputRange: [1, 2.5, 1],
            extrapolate: "clamp",
          });
          const opacity = GlobalVars.MapAnimation.interpolate({
            inputRange,
            outputRange: [0.35, 1, 0.35],
            extrapolate: "clamp",
          });
          return { scale, opacity };
        });


        console.log("############## rerenderion the mapview #################");


        return (
              <MapView
                    ref={map => GlobalVars.mapRef = map}
                    style={{ flex: 1 }}
                    region={this.props.mapData.userLocation}
                  >
                    <MapView.Marker
                      coordinate={this.props.mapData.userLocation}
                      title="YOU"
                      description="Current Location"
                    />
                    {
                      this.props.vendorListData.filteredVendorList.length ? (
                      this.props.vendorListData.filteredVendorList.map((vendor, index) => {

                        const scaleStyle = {
                          transform: [
                            {
                              scale: interpolations[index].scale,
                            },
                          ],
                        };
                        const opacityStyle = {
                          opacity: interpolations[index].opacity,
                        };

                          return <MapView.Marker key={index}
                                    identifier={vendor.id+""}
                                    coordinate={vendor.location}
                                    title={vendor.shop_name}
                                    description={vendor.shop_description}
                                    onPress={(event) => this.handleMarkerPress(event)}
                                  >
                                    <Animated.View style={[styles.markerWrap, opacityStyle]}>
                                      <Animated.View style={[styles.ring, scaleStyle]} />
                                      <View style={styles.marker} />
                                    </Animated.View>
                                  </MapView.Marker>
                      })
                      ) : null
                    } 
              </MapView>
        );
      }


      handleMarkerPress(event) {
        const markerID = event.nativeEvent.id
        console.log("markerID"+markerID)
      }
}

function mapStateToProps(state){
    return {
      mapData : state.locReducer,
      vendorListData : state.vendorReducer
    }
}

function mapDispatchToProps(dispatch){
  return {
    getAllVendorList : () => dispatch(getAllVendorList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);





const styles = StyleSheet.create({
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});