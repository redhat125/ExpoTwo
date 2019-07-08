import React, { Component } from 'react';
import VendorCard from './VendorCard.js';
import { StyleSheet, View, Animated, Image, Dimensions, Text } from "react-native";
import { SCREEN_INFO, LOCATION_CONST, GlobalVars, GlobalVars1 } from '../../../AppContants/constants.js';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

class ScrollVendorCards extends Component {
    constructor(props) {
        super(props);
        this.index = 0;
    }

    componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        GlobalVars.MapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / SCREEN_INFO.CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= this.props.vendorListData.filteredVendorList.length) {
                index = this.props.vendorListData.filteredVendorList.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }
            console.log("************************** inside animation add listner "+ JSON.stringify(value) + " with scroll index "+ index + " this.index " + this.index);
            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
                if (this.index !== index) {
                    this.index = index;
                    const coordinate = this.props.vendorListData.filteredVendorList[index].location;

                    console.log("animate to coordinate"+ JSON.stringify(coordinate));

                    GlobalVars.mapRef.animateToRegion(
                        {
                        ...coordinate,
                        latitudeDelta: LOCATION_CONST.GEO_DELTA.latitudeDelta,
                        longitudeDelta: LOCATION_CONST.GEO_DELTA.longitudeDelta,
                        },
                        50
                    );
                }
            }, 10);
        });
      }

    _renderItem ({item, index}) {
        return (
            <VendorCard vendorCardInfo={item} key={index}/>
        );
    }

    _centerMapOnMarker (index) {
        const markerData = this.props.vendorListData.filteredVendorList[index];

        if (!markerData || !GlobalVars.mapRef) {
            return;
        }
        // mapRef.animateToRegion({
        //     latitude: markerData.geolocation.latitude - CENTER_LAT_OFFSET,
        //     longitude: markerData.geolocation.longitude,
        //     latitudeDelta: 0.0315,
        //     longitudeDelta: 0.0258
        // });


        const coordinate = markerData.location;

        console.log("animate to coordinate"+ JSON.stringify(coordinate));

        GlobalVars.mapRef.animateToRegion(
            {
            ...coordinate,
            latitudeDelta: LOCATION_CONST.GEO_DELTA.latitudeDelta,
            longitudeDelta: LOCATION_CONST.GEO_DELTA.longitudeDelta,
            },
            50
        );
    }



    render() {
        return (
           





            <View style={styles.scrollView}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.props.vendorListData.filteredVendorList}
                    renderItem={this._renderItem}
                    sliderWidth={SCREEN_INFO.WIDTH}
                    itemWidth={SCREEN_INFO.CARD_WIDTH}
                    style={{ flex: 1 }}
                    onSnapToItem={(index, marker) => this._centerMapOnMarker(index)}
                />
            </View>
        );
    }
}


function mapStateToProps(state){
    return {
      mapData : state.locReducer,
      vendorListData : state.vendorReducer
    }
}

export default connect(
  mapStateToProps
)(ScrollVendorCards);




  const styles = StyleSheet.create({
    scrollCards:{
        marginBottom:10,
        bottom:70,
        position:"absolute"
    },
    container: {
      flex: 1,
    },
    scrollView: {
      position: "absolute",
      bottom: 70,
      height: SCREEN_INFO.CARD_HEIGHT+15
    },
    endPadding: {
      paddingRight: SCREEN_INFO.WIDTH - SCREEN_INFO.CARD_WIDTH,
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: SCREEN_INFO.CARD_HEIGHT,
      width: SCREEN_INFO.CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 12,
      marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
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