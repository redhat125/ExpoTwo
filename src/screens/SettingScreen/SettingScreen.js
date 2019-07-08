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
  Right
} from "native-base";

export default class SettingScreen extends React.Component {
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
                <Title>Settings</Title>
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
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Text>Goto Main</Text>
              </Button>
              <Button
                full
                rounded
                primary
                style={{ marginTop: 10 }}
                onPress={() => this.props.navigation.navigate("About")}
              >
                <Text>Goto About</Text>
              </Button>
            </Content>
          </Container>
        );
    }
}
