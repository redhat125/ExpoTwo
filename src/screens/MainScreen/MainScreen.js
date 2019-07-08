import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Footer,
  FooterTab,
  Spinner,
  InputGroup,
  Input,
  View
} from "native-base";

import MainFooter from "./MainFooter.js";
import MapComponent from "./MapComponent/MapComponent.js";
import { connect } from 'react-redux';
import {getLocationPermission} from '../../AppUtils/apicaller/locApis.js'; 
import {getCurrentLocation} from '../../AppUtils/Actions/locActions.js';

import SearchBox from './SearchBar.js';
import LeftTopMenu from '../LeftTopMenu.js';
import ScrollVendorCards from './mapScrollCards/ScrollVendorCards.js';


class MainScreen extends React.Component {
  // constructor(props) {
  //     super(props);
  //     global.AnimationInst = new Animated.Value(0);
  // }

  componentDidMount() {
    let getLoc = () => this.props.getCurrLocation();
    getLocationPermission()
    .then(function(result){
      if(result){
        getLoc();
      }
      else{
        console.log("permission is not granted by the user");
      }
    })
    .catch(function (error){
      console.log("some error occured to get location permission. Cause: "+error);
    });
  }


  render() {
    return (
      <Container>
        {
          (this.props.mapData.isLocFetching || this.props.mapData.locError) ?
                                 <Spinner color='red'/> 
                                 : 
                                 <MapComponent/>
        }

        <LeftTopMenu toggleDrawer={()=>this.props.navigation.toggleDrawer()}/>

        <SearchBox />

        <ScrollVendorCards />

        <MainFooter {...this.props}/>

      </Container>
    );
  }
}


function mapStateToProps(state){
  return {
    mapData : state.locReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCurrLocation : () => dispatch(getCurrentLocation())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);



const styles = {
  searchBox:{
      top:10,
      position:"absolute",
      width:'100%'
  },
  inputWrapper:{
      marginLeft:15,
      marginRight:10,
      marginTop:10,
      marginBottom:0,
      backgroundColor:"#fff",
      opacity:0.9,
      borderRadius:'30%'
  },
  inputSearch:{
      fontSize:14
  },
  label:{
      fontSize:10,
      fontStyle: "italic",
      marginLeft:10,
      marginTop:10,
      marginBottom:0
  }
};