import React, { Component } from 'react';
import VendorCard from './VendorCard.js';
import {DraggableBox} from '../../AboutScreen/DraggableBox.js';
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
        this._centerMapOnMarker = (index) => {
            const markerData = this.props.vendorListData.filteredVendorList[index];
    
            if (!markerData || !GlobalVars.mapRef) {
                return;
            }
            const coordinate = markerData.location;
            console.log("animate to coordinate"+ JSON.stringify(coordinate));
    
            GlobalVars.mapRef.animateToRegion(
                {
                    ...coordinate,
                    latitudeDelta: LOCATION_CONST.GEO_DELTA.latitudeDelta,
                    longitudeDelta: LOCATION_CONST.GEO_DELTA.longitudeDelta,
                },
                350
            );
        }
    }

    _renderItem ({item, index}) {
        return (
            <VendorCard vendorCardInfo={item} key={index}/>
            //<DraggableBox key={index}/>
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
    scrollView: {
      position: "absolute",
      bottom: 70,
      height: SCREEN_INFO.CARD_HEIGHT+15
    }
  });