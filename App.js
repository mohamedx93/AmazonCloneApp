import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View,Platform,  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens'
import { Icon, Container, Left, Body, Right, List, ListItem, Content, Header } from 'native-base'

const AppDrawerNavigator = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawerNavigator.Navigator
        initialRouteName="Home"
        drawerContent={() => <CustomDrawerContentComponent />}
        drawerPosition="left"

      >
        <AppDrawerNavigator.Screen name="Home" component={HomeScreen} />
      </AppDrawerNavigator.Navigator>
    </NavigationContainer>

  );
}

const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={{ backgroundColor: "#3a455c", height: 90 }}>
      <Left style={{flex:1, flexDirection:"row", alignItems: "center"}}>
        <Icon name='person' style={{color: 'white'}}/>
        <Text style={{marginLeft:5, fontSize:22, color:'white', fontStyle: 'italic'}}>Hello, Mohammed</Text>
      </Left>
      </Header>
      <Content>
        <FlatList
          data={['Home', 'Shop by Category', 'Today\'s Deals']}
          renderItem={({ item }) => (
            <ListItem key={item} noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{ borderTopColor: "#f0f0f0", borderTopWidth: 0.5 }}
          data={['Your Wish List', 'Your Account', 'Amazon Pay', 'Prime', 'Sell on Amazon']}
          renderItem={({ item }) => (
            <ListItem key={item} noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />

        <FlatList
          style={{ borderTopColor: "#f0f0f0", borderTopWidth: 0.5 }}
          data={['Settings', 'Customer Service']}
          renderItem={({ item }) => (
            <ListItem key={item} noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />

      </Content>

    </Container>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.height
      }

    })
  }
});
