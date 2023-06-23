import { View, Text, StyleSheet, Button, Image, Linking } from "react-native"
import CardItemList from "../components/card_list";
import React,{ useEffect, useState } from "react";

const HomeScreen = () => {
    const [data, setData] = useState([])

    // fetch data from django server
    const fetch_from_django = () => {
        fetch("https://web-production-a388.up.railway.app/")
        .then(response => {
            return response.json()
        })
        .then(data => {
        setData(data)
        })
    }

    useEffect(() => {
        fetch_from_django()
    }, [])

    return (
        <View>

            <Text style={{padding: 20, fontSize:20, textAlign: "center"}}>List of Countries</Text>

            <CardItemList data={data} />

        </View>
    )
}

export default HomeScreen;