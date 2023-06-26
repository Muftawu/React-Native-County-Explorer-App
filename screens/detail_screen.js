import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image, Linking } from "react-native"
import { ScrollView } from "react-native-gesture-handler";


const DetailScreen = () => {
    const route = useRoute()
    const {id, name, city, image, description} = route.params
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "About " + name,
        })
    })

    const img = "https://web-production-a388.up.railway.app/images/" + id
    
    return (
        <ScrollView>
        <View>
            <Text style={{padding: 10, textAlign: 'center', fontSize: 30, fontWeight: "bold"}}>{name}</Text>

            <View style={{padding: 20, alignItems: 'center'}}>

                <Image style={styles.img} source={{ uri: img }} />

            </View>


            <Text style={styles.country_info}>{description}</Text>

            <Button 
                title="Back to Home"
                onPress={() => navigation.goBack()}
                touchSoundDisabled={false}
                />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 350,
        paddingLeft: 20,
        borderRadius: 20,
        },
    country_info: {
        padding: 25,
        fontSize:20,
    }
})

export default DetailScreen;