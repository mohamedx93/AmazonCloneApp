import { Card, CardItem, Right } from 'native-base'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StarRating from 'react-native-star-rating'

export default function RecommendedCardItem(props) {
    return (
        <CardItem >
            <View>
                <Image
                    style={{ height: 90, width: 60 }}
                    source={props.imageUri} />
            </View>
            <Right style={{
                flex: 1,
                alignItems: 'flex-start',
                paddingHorizontal: 20,
                height: 90
            }}
            >
                <Text>{props.itemName}</Text>
                <Text style={{color:'grey', fontSize:11}}>{props.itemCreator}</Text>
                <Text style={{color:'#c4402f', fontWeight:"bold", fontSize:14}}>{props.itemPrice}</Text>
                <Text><Text style={{color: 'grey', fontSize:11}}>You save </Text>${props.savings}</Text>
                <StarRating 
                    disabled={true}
                    maxStars={5}
                    rating={props.rating}
                    starSize={12}
                    fullStarColor='orange'
                    emptyStarColor='orange'
                />
            </Right>
        </CardItem>
    )
}

const styles = StyleSheet.create({})
