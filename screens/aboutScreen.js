import { View, Text, StyleSheet, Button, Image, Linking } from "react-native"
import CardItemList from "../components/card_list";
import { useEffect, useLayoutEffect, useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
import { useNavigation } from "@react-navigation/native";
import AppInfo from "../database/appInfo";


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

    return (
        <View>
          <Text style={{fontSize:20, paddingTop: 20, fontWeight: "bold", textAlign: "center"}}>About Application</Text>
            <Text style={{fontSize: 20, padding: 20}}>{AppInfo()}</Text>
        </View>
    )
}

export default AboutScreen;