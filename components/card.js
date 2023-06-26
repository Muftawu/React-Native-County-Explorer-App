import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet } from "react-native"
import { Button, Image, Linking, TouchableOpacity } from "react-native"

const CardItem = ({id, name, city, image, description}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Detail", {id, name, city, image, description})}>
            <Text style={{fontSize: 20, fontWeight: "bold"}}>{id}. {name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        borderWactivityth: 1,
        borderRadius: 10,
        borderWidth: 1,
    }
})

export default CardItem;