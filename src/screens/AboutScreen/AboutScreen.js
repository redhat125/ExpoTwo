import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
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
  Spinner,
  InputGroup,
  Input
} from "native-base";

import { connect } from 'react-redux';
import { fetchData } from '../../AppUtils/Actions/actions.js';

//export default class AboutScreen extends React.Component {
class AboutScreen extends React.Component {
    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={() => this.props.navigation.toggleDrawer()}
                >
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>About</Title>
              </Body>
              <Right />
            </Header>
            <Content padder>
              <Card>
                <CardItem>
                  <Body>
                    <Text>Go to other screens!</Text>
                  </Body>
                </CardItem>
              </Card>
              <Button
                full
                rounded
                dark
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("Setting")}
              >
                <Text>Goto Setting</Text>
              </Button>
              <Button
                full
                rounded
                primary
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Text>Goto Main</Text>
              </Button>



                <Card style={{ marginTop: 50 }}>
                    <Header>
                        <Text>Results below....</Text>
                    </Header>
                    <CardItem>
                        <Body style={{flexDirection: "row", justifyContent: "center"}}>
                            {
                                this.props.appData.isFetching && <Spinner color='red'/>
                            }
                            {
                                this.props.appData.data.length ? (
                                this.props.appData.data.map((person, i) => {
                                    return <View key={i} >
                                    <Text>Name: {person.name}</Text>
                                    <Text>Age: {person.age}</Text>
                                    </View>
                                })
                                ) : null
                            }
                        </Body>
                    </CardItem>
                    <CardItem style={{ marginTop: 10 }}>
                        <Body>
                            <Button
                                full
                                rounded
                                primary
                                onPress={() => this.props.fetchData()}
                                >
                                <Text>Load Data</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>

                <View style={styles.box2}>
                <InputGroup>
                    <Icon name='ios-search' />
                    <Input placeholder='Search'/>
                    <Button transparent onPress={() => console.log("searched pressed")}>
                    <Text>Search</Text>
                  </Button>
                </InputGroup>
    </View>

            </Content>
          </Container>
        );
    }
}


function mapStateToProps (state) {
    return {
      appData: state.dataReducer
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      fetchData: () => dispatch(fetchData())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AboutScreen);





  const styles = StyleSheet.create({
    box2: {
      top: 80,
      margin: '3%',
      backgroundColor: 'blue',
      width:'94%',
      transform: [{'translate': [0,0, 1]}]
    },
    text: {
      color: '#ffffff',
      fontSize: 80
    },
    searchBox:{
      position: 'absolute',
      transform: [{'translate': [0,0, 1]}]
    }
  });