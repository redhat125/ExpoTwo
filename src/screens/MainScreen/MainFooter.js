import React from "react";
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
  List,
  ListItem,
} from "native-base";
import {
  StyleSheet,
  View
} from "react-native";
import { connect } from 'react-redux';
import {getFilteredVendorList} from '../../AppUtils/Actions/vendorActions.js';
import {BtnInfoList} from '../../AppContants/constants.js';


const items = ["Main", "Setting", "About", "Main", "Setting", "About"];
const vendorTypes = ["Cold", "Hot", "Paper", "Food", "Baked", "Vegetables", "Fruits", "Juice"];
const itemLogos = ["beer", "flame", "paper", "nutrition", "pizza", "person", "logo-apple", "glasses"];

export class MainFooter extends React.Component {
  render() {
    return (
        <Footer style={styles.footerMain}>
            <FooterTab>
            <List dataArray={BtnInfoList} horizontal={true}
                renderRow={(btnInfo) =>
                  <View style={styles.buttonBox}>
                        <Button
                            vertical
                            onPress={() => this.props.getFilteredVendorList(this.props.vendorListData.vendorList, btnInfo.categoryId)}
                            style={styles.ballButton}
                            >
                            <Icon name={btnInfo.logo} />
                        </Button>
                        <Text style={styles.label}>{btnInfo.type}</Text>
                  </View>
                }>
            </List>
            </FooterTab>
        </Footer>
    );
  }
}


function mapStateToProps(state){
  return {
    vendorListData : state.vendorReducer
  }
}

function mapDispatchToProps(dispatch){
return {
  getFilteredVendorList : (completeVendorList,categoryId) => dispatch(getFilteredVendorList(completeVendorList, categoryId))
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFooter);



const styles = StyleSheet.create({
  footerMain: {
    height: 80,
    backgroundColor:"red"
  },
  buttonBox:{
    marginLeft: 8,
    width: 60,
    justifyContent:'center',
    alignItems: 'center'
  },
  ballButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent:'center',
    alignItems: 'center'
  },
  label:{
    fontSize:10,
    fontStyle: "italic",
    justifyContent:'center'
  }
});