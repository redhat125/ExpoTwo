import React, { Component } from 'react';
import VendorCard from './VendorCard.js';
import {DraggableBox} from '../../AboutScreen/DraggableBox.js';
import { StyleSheet, View, Animated, Image, Dimensions, Text, Easing } from "react-native";
import { SCREEN_INFO, LOCATION_CONST, GlobalVars, GlobalVars1 } from '../../../AppContants/constants.js';
import { connect } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

class ScrollVendorCards extends Component {
    constructor(props) {
        super(props);
        this.index = 0;
        this._renderItem = this._renderItem.bind(this);
        this.toggelCard = this.toggelCard.bind(this);
        //this.zoomVendorMarker = this.zoomVendorMarker.bind(this);

        this.card_Ytranslate = new Animated.Value(0);
        this.card_expanded = false;
    }

    componentDidMount() {
        this._centerMapOnMarker = (index) => {
            const markerData = this.props.vendorListData.filteredVendorList[index];
            if (!markerData || !GlobalVars.mapRef)
                return;

            const coordinate = markerData.location;
            //console.log("animate to coordinate"+ JSON.stringify(coordinate));
            GlobalVars.mapRef.animateToRegion(
                {
                    ...coordinate,
                    latitudeDelta: LOCATION_CONST.GEO_DELTA.latitudeDelta,
                    longitudeDelta: LOCATION_CONST.GEO_DELTA.longitudeDelta,
                },
                350
            );

            this.zoomVendorMarker(index);
        }
    }

    zoomVendorMarker(index){
        //console.log("inside zoomVendorMarker");
        GlobalVars.MapAnimation.setValue(0);
        Animated.timing(
            GlobalVars.MapAnimation,
            {
                toValue: index,
                duration: 350,
                easing: Easing.easeOutCubic
            }
        ).start();
        //console.log("zoomVendorMarker toggled done");
    };

    toggelCard(){
        //console.log("card toggled");
        this.card_expanded = !this.card_expanded;
        this.card_Ytranslate.setValue((this.card_expanded)?1:0);
        Animated.spring(
            this.card_Ytranslate,
            {
                toValue: (this.card_expanded)?0:1,
                friction: (this.card_expanded)?3:2
            }
        ).start();
        //console.log("card toggled done");
    };

    _renderItem ({item, index}) {
        return (
            <VendorCard vendorCardInfo={item} key={index} cardClick={this.toggelCard}/>
        );
    }

    render() {
        const card_moveY = this.card_Ytranslate.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -(SCREEN_INFO.HEIGHT-(110+SCREEN_INFO.CARD_HEIGHT))]
        });

        return (
            <Animated.View 
                style={[ 
                    styles.scrollView,
                    {
                    transform: [
                        {
                            translateY: card_moveY
                        }
                    ]
                    }
                ]}
            >
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.props.vendorListData.filteredVendorList}
                    renderItem={this._renderItem}
                    sliderWidth={SCREEN_INFO.WIDTH}
                    itemWidth={SCREEN_INFO.CARD_WIDTH}
                    style={{ flex: 1 }}
                    onSnapToItem={(index, marker) => this._centerMapOnMarker(index)}
                />
            </Animated.View>
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
        bottom: -(SCREEN_INFO.HEIGHT-(190+SCREEN_INFO.CARD_HEIGHT)),
        height: SCREEN_INFO.HEIGHT-100
    }
});