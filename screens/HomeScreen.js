import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Image } from 'react-native'
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base'
import Swiper from 'react-native-swiper'
import { FontAwesome } from "@expo/vector-icons";
import RecommendedCardItem from '../components/RecommendedCardItem';
export function HomeScreen({navigation}) {
    return (
        <Container >
            <Header style={[{ backgroundColor: "#3a455c", height: 90, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: "#757575" }, styles.androidHeader]}>
                <Left style={{ flexDirection: "row" }}>
                    <Icon name='md-menu' onPress={()=>navigation.openDrawer()} style={{ backgroundColor: 'white', marginRight: 15 }} />
                    <FontAwesome name='amazon' style={{ fontSize: 32, color: 'white' }} />
                </Left>
                <Right>
                    <Icon name='md-cart' style={{ color: 'white' }} />
                </Right>
            </Header>

            <View style={{ position: "absolute", top: 90, height: 70, left: 0, right: 0, backgroundColor: "#3a455c", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5, zIndex: 2 }}>
                <TouchableOpacity>
                    <View style={{ width: 100, height: 50, backgroundColor: "#e7e7eb", borderRadius: 4, padding: 10 }}>
                        <Text style={{ fontSize: 12 }}>Shop by</Text>
                        <Text style={{ fontWeight: "bold" }}>Category</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: "center" }}>
                    <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                        <Icon name='search' style={{ fontSize: 20, paddingTop: 5 }} />
                        <Input placeholder="Search" />
                    </Item>
                </View>
            </View>
            <Content style={{ backgroundColor: '#d5d5d6', marginTop: 70 }}>
                <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: "center", justifyContent: "space-between" }}>
                    <Text>Hello, Mr Mohammed</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text>Your Account </Text>
                        <Icon name='ios-arrow-forward' style={{ fontSize: 18 }} />
                    </View>
                </View>
                <Swiper
                    autoplay={true}
                    style={{ height: 100 }}>
                    <View style={{ flex: 1 }}>
                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                            source={require('../assets/swiper_1.jpg')}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                            source={require('../assets/swiper_2.jpg')}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
                            source={require('../assets/swiper_3.jpg')}
                        />
                    </View>
                </Swiper>
                <Card style={{ marginLeft: 5, marginRight: 5 }}>
                    <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
                        <Text>Your recommendations</Text>
                    </CardItem>
                    <RecommendedCardItem
                        itemName='You can heal your life'
                        itemCreator='Louis Hay'
                        itemPrice='$10'
                        savings="2.5"
                        imageUri={require('../assets/recommended_1.jpg')}
                        rating={5}
                    />
                    <RecommendedCardItem
                        itemName='Uncharted 4'
                        itemCreator='Sony'
                        itemPrice='$19.99'
                        savings="17"
                        imageUri={require('../assets/recommended_2.jpg')}
                        rating={5}
                    />
                    <RecommendedCardItem
                        itemName='EA UFC 2'
                        itemCreator='EA Sports'
                        itemPrice='$44'
                        savings="6"
                        imageUri={require('../assets/recommended_3.jpg')}
                        rating={3}
                    />
                </Card>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.height
            }

        })
    }
})
