import { View, Text, StyleSheet, Button } from "react-native"
import { Image, Linking, FlatList } from "react-native"
import CardItem from "./card";
import { DATA } from "../database/dummy";

const CardItemList = ({data}) => {

    const renderItem = ({item}) => {
        return (
            <View style={{pading: 10}}>
            <CardItem id={item.id} name={item.name} city={item.city} image={item.image} description={item.description}/>
            </View>
        )
    }


    return (
        <View>
          
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />

        </View>

    )
}

export default CardItemList;