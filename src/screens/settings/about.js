import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>

            <View >
                <Text style={styles.header} >About-Techquiz</Text>
            </View>
            <View >
            <Text style={styles.cover}>Welcome To Techquiz, Here we provide Multiple Choice Questions/Objective Type specifically for Programmers who are on a learning stage, amateurs as well as professionals. We focus on commom programming languages such as Python, Java, C, C++. We focus on these languages as these are the stepping stones for further development from a Student to a IT professional, The Quiz is divided into three sublevel for each language namely Basic, Intermediate, as well as Complex. We hope that you will enjoy the learning experience by implementing your knowledge here with us.  
            </Text>
            <Text style={{ paddingTop: 25, color: 'white' }}>Thanks and Regard</Text>
            <Text style={{ paddingTop: 25, color: 'white' }}>Tech-Quiz</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
        padding: 5,
        padding: 40,
        position: 'absolute',
        flexDirection: 'column'

    },
    header: {
        position: 'absolute',
        top: 50,
        left: 90,
        fontSize: 30
    },
    cover: {
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        position: 'relative',
        flex: 2,
        paddingTop: 150,
        lineHeight: 35,
        color:'white'
        
    }
});