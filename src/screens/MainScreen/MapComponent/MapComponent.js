import React from "react";
import { MapView } from 'expo';
import { connect } from 'react-redux';
import {getAllVendorList} from '../../../AppUtils/Actions/vendorActions.js';
import { SCREEN_INFO, GlobalVars, BtnInfoList } from '../../../AppContants/constants.js';
import { StyleSheet, Text, View, Animated, Image, Dimensions } from "react-native";
import { Icon } from "native-base";




class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        //GlobalVars1.MapAnimation = new Animated.Value(0);
        //this.filteredMarkers;
        //this.markersCoordinate = [];
    }

      componentDidMount() {
        this.props.getAllVendorList();
        console.log("getAllVendorList action triggered around "+ JSON.stringify(this.props.mapData.userLocation));
      }



      shouldComponentUpdate(){
        //console.log("shouldComponentUpdate ecex "+ JSON.stringify(this.props.vendorListData.filteredVendorList));
        return true;
      }
      
      componentWillUpdate(){
        //console.log("componentWillUpdate exec "+ JSON.stringify(this.props.vendorListData.filteredVendorList));
      }
      
      componentDidUpdate(){
        //console.log("componentDidUpdate exec "+ JSON.stringify(this.props.vendorListData.filteredVendorList));
        // GlobalVars.mapRef.fitToSuppliedMarkers(
        //   this.filteredMarkers,
        //   false, // not animated
        // );
      }




      render() {
        console.log("############## rerenderion the mapview #################");
        this.filteredMarkers = this.addMarkersToMap(this.props.vendorListData.filteredVendorList);

        return (
              <MapView
                    ref={map => GlobalVars.mapRef = map}
                    style={{ flex: 1 }}
                    onLayout={() =>{console.log("layout called"); GlobalVars.mapRef.fitToSuppliedMarkers(this.filteredMarkers, { edgePadding: { top: 500, right: 100, bottom: 100, left: 100 }, animated: false })}}
                    region={this.props.mapData.userLocation}
                  >
                    <MapView.Marker
                      coordinate={this.props.mapData.userLocation}
                      title="YOU"
                      description="Current Location"
                    />
                    {
                      this.filteredMarkers
                    } 
              </MapView>
        );
      }

      addMarkersToMap(passedVendorList){
        const interpolations = this.getInterpolations(passedVendorList);
        return  passedVendorList.length ? (
            passedVendorList.map((vendor, index) => {
              const markerCoordInfo = {
                markerid : vendor.id+"",
                animCoordinate : new MapView.AnimatedRegion(vendor.location)
              };

              //this.markersCoordinate.push(markerCoordInfo);

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
                        <Animated.View style={styles.markerWrap}>
                          <Animated.View style={[styles.ring, scaleStyle]} />
                          
                            <Icon name={
                                BtnInfoList.filter((btnInfo)=>{
                                  return (vendor.categoryId == btnInfo.categoryId)
                                })[0].logo
                            } style={{fontSize: 30, color: 'red'}}/>
                          
                        </Animated.View>
                      </MapView.Marker>
            })
          ) : null
      }

      getInterpolations(passedVendorList){
        return  passedVendorList.length ? (
            passedVendorList.map((marker, index) => {
            const inputRange = [index-1, index, index+1];
            const scale = GlobalVars.MapAnimation.interpolate({
              inputRange,
              outputRange: [0, 2.5, 0],
              extrapolate: "clamp",
            });
            const opacity = GlobalVars.MapAnimation.interpolate({
              inputRange,
              outputRange: [0.35, 1, 0.35],
              extrapolate: "clamp",
            });
            return { scale, opacity };
          })
        ) : null;
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
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderColor: "rgba(130,4,150, 0.5)",
  },
});