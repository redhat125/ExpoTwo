import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { SCREEN_INFO } from '../../../AppContants/constants.js';


export default class VendorCard extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <Card vendorId={this.props.vendorCardInfo.id} style={styles.card}>
          <CardItem header bordered>
            <Left>
              <Thumbnail source={{uri: "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"}} />
              <Body>
                <Text>{this.props.vendorCardInfo.shop_name}</Text>
                <Text note>3.7 km</Text>
              </Body>
            </Left>
            <Right>
              <Icon active name="thumbs-up" />
              <Text>{this.props.vendorCardInfo.rating}</Text>
            </Right>
          </CardItem>
          <CardItem cardBody style={styles.cardBoxBody}>
            <Body>
              <Text>{this.props.vendorCardInfo.name}</Text>
              <Text note>{this.props.vendorCardInfo.shop_description}</Text>
              <Text note>{this.props.vendorCardInfo.contact}</Text>
              <Text note>{this.props.vendorCardInfo.mode}</Text>
            </Body>
          </CardItem>
        </Card>

    );
  }
}

// const styles = {
//   cardBox:{
//     width:300
//   },
//   cardBoxBody:{
//       height: 100,
//       padding:10
//   }
// };

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
    bottom: 30,
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


// var vendorCardInfo = { 
//     id: 12345,
//     name: 'Ram',
//     shop_name: 'paper wala',
//     shop_description: 'about vendor buying paper',
//     categoryId: 1,
//     mode: 'cycle',
//     location:{
//         latitude: 12.987537,
//         longitude: 77.685677
//     },
//     rating: 4.36,
//     contact: 123456777
// }




// <View style={styles.card} key={index}>
//             <Image
//                 source={marker.image}
//                 style={styles.cardImage}
//                 resizeMode="cover"
//             />
//             <View style={styles.textContent}>
//                 <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
//                 <Text numberOfLines={1} style={styles.cardDescription}>
//                 {marker.description}
//                 </Text>
//             </View>
//         </View>