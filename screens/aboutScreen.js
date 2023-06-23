import { View, Text, StyleSheet, Button, Image, Linking } from "react-native"
import CardItemList from "../components/card_list";
import { useEffect, useLayoutEffect, useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
import { useNavigation } from "@react-navigation/native";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });


const AboutScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "About Application",
        })
    })

    return (
        <View>
            <Text style={{fontSize: 20, padding: 20}}>
            {lorem.generateParagraphs(2)}
            </Text>
        </View>
    )
}

export default AboutScreen;