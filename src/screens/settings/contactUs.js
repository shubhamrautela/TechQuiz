import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Linking} from 'react-native';

export default function contactUs({ navigation }) {
    return (
        <View style={styles.container}>

            <View >
                <Text style={styles.header} >Contact-Us</Text>
            </View>
            <View >
            <Text style={styles.cover}>Hello User, Feel free to Contact us for help, consultation or any other quiz related query.
            </Text>
            <Button onPress={() => Linking.openURL('mailto- techquizapp03@gmail.com')  }
      title="mailto- techquizapp03@gmail.com" 
      color= 'black' />
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
        left: 100,
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
        color: 'white'
    },
});