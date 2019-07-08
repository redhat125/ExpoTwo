import React, { Component } from 'react';
import VendorCard from './VendorCard.js';
import { StyleSheet, View, Animated, Image, Dimensions } from "react-native";
import { SCREEN_INFO, LOCATION_CONST, GlobalVars, GlobalVars1 } from '../../../AppContants/constants.js';
import { connect } from 'react-redux';



const Images = [
    { uri: "https://i.imgur.com/sNam9iJ.jpg" },
    { uri: "https://i.imgur.com/N7rlQYt.jpg" },
    { uri: "https://i.imgur.com/UDrH0wm.jpg" },
    { uri: "https://i.imgur.com/Ka8kNST.jpg" }
];

// class GlobalVars1{
//     static MapAnimation;
// }

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



    // <List style={styles.scrollCards} dataArray={vendorScrollList} horizontal={true}
    //             renderRow={(newVendorInfo) =>{
    //                 { console.log("vendorInfo"+JSON.stringify(newVendorInfo)) }
    //                 return <VendorCard vendorCardInfo={newVendorInfo}/>;
    //                 }
                
    //             }>
    //         </List>


    render() {
        return (
            <Animated.ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={SCREEN_INFO.CARD_WIDTH}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: GlobalVars.MapAnimation,
                                },
                            },
                        }
                    ],
                    { useNativeDriver: true }
                )}
                style={styles.scrollView}
                contentContainerStyle={styles.endPadding}
            >
                {this.props.vendorListData.filteredVendorList.map((newVendorInfo, index) => (

                    <VendorCard vendorCardInfo={newVendorInfo} key={index}/>
                    
                ))}
            </Animated.ScrollView>
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


// const styles = {
//     scrollCards:{
//         marginBottom:10,
//         bottom:70,
//         position:"absolute"
//     }
//   };


// <View style={styles.card} key={index}>
//                         <Image
//                             source={marker.image}
//                             style={styles.cardImage}
//                             resizeMode="cover"
//                         />
//                         <View style={styles.textContent}>
//                             <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
//                             <Text numberOfLines={1} style={styles.cardDescription}>
//                             {marker.description}
//                             </Text>
//                         </View>
//                     </View>




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
      left: 0,
      right: 0,
      paddingVertical: 10,
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









  const newVendorInfo1 = { 
    id: 12345,
    name: 'Ram',
    shop_name: 'paper wala',
    shop_description: 'about vendor buying paper',
    categoryId: 1,
    mode: 'cycle',
    location:{
        latitude: 12.987537,
        longitude: 77.685677
    },
    rating: 4.36,
    contact: 123456777
};


const vendorScrollList = [
    { 
        id: 12345,
        name: 'Ram',
        shop_name: 'paper wala',
        shop_description: 'about vendor buying paper',
        categoryId: 1,
        mode: 'cycle',
        location:{
            latitude: 12.987537,
            longitude: 77.685677
        },
        rating: 4.36,
        contact: 123456777
    },
    { 
        id: 123456,
        name: 'Hema',
        shop_name: 'vegetable wala',
        shop_description: 'about vendor selling vegetable',
        categoryId: 2,
        mode: 'walking',
        location:{
            latitude: 12.989338,
            longitude: 77.688951
        },
        rating: 3.36,
        contact: 123456888
    },
    { 
        id: 1234567,
        name: 'Hari',
        shop_name: 'icecream wala',
        shop_description: 'about vendor selling icecream',
        categoryId: 3,
        mode: 'motor',
        location:{
            latitude: 12.985154,
            longitude: 77.691329
        },
        rating: 5.00,
        contact: 123456999
    },
    { 
        id: 12345545,
        name: 'Ram',
        shop_name: 'paper wala',
        shop_description: 'about vendor buying paper',
        categoryId: 4,
        mode: 'cycle',
        location:{
            latitude: 12.989225,
            longitude: 77.687068
        },
        rating: 4.36,
        contact: 123456777
    },
    { 
        id: 123456454,
        name: 'Hema',
        shop_name: 'vegetable wala',
        shop_description: 'about vendor selling vegetable',
        categoryId: 5,
        mode: 'walking',
        location:{
            latitude: 12.985772,
            longitude: 77.687379
        },
        rating: 3.36,
        contact: 123456888
    },
    { 
        id: 12345673232,
        name: 'Hari',
        shop_name: 'icecream wala',
        shop_description: 'about vendor selling icecream',
        categoryId: 6,
        mode: 'motor',
        location:{
            latitude: 12.988920,
            longitude: 77.692491
        },
        rating: 5.00,
        contact: 123456999
    },
    { 
        id: 1234567124,
        name: 'Hari',
        shop_name: 'icecream wala',
        shop_description: 'about vendor selling icecream',
        categoryId: 7   ,
        mode: 'motor',
        location:{
            latitude: 12.985206,
            longitude: 77.693501
        },
        rating: 5.00,
        contact: 123456999
    }
  ];