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
const items = ["Main", "Setting", "About", "Main", "Setting", "About"];
export default class MainFooter extends React.Component {
  render() {
    return (
        <Footer style={styles.footerMain}>
            <FooterTab>
            <List dataArray={items} horizontal={true}
                renderRow={(item) =>
                  <View style={styles.buttonBox}>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate(item)}
                            style={styles.ballButton}
                            >
                            <Icon name="bowtie" />
                            
                        </Button>
                        <Text style={{justifyContent:'center'}}>{item}</Text>
                        </View>
                }>
            </List>
            </FooterTab>
        </Footer>
    );
  }
}



const styles = StyleSheet.create({
  footerMain: {
    height: 90
  },
  buttonBox:{
    marginLeft: 8,
    marginTop:5,
    width: 60,
    justifyContent:'center',
    alignItems: 'center'
  },
  ballButton: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});