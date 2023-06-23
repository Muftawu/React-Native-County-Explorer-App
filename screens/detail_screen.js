import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Image, Linking } from "react-native"

const DetailScreen = () => {
    const route = useRoute()
    const {id, name, city, image} = route.params

    return (
        <View>

            <Text style={{padding: 10, textAlign: 'center', fontSize: 20}}>{name}</Text>

            <View style={{padding: 20, alignItems: 'center'}}>
                <Text>Image source: {image}</Text>

            <Image style={styles.img} source={{uri: image }} />

            <Image style={styles.img} source={require("../assets/images/dummy.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 300,
        paddingLeft: 20,
        borderRadius: 30,
        }
})

export default DetailScreen;