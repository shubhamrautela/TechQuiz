import { View, StyleSheet, TextInput, FlatList, Text, keyboard } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';



const listItems = ['Upendra Beth', 'Pratik Gahane', 'Sanket Thakare', 'Harsh Thakur', 'Rohan', 'Rahul','Ritik', 'kirti']


class Friends extends Component {
    state = {
        searchBarFocused: false
    }

    render() {
        return (
            <View styles={styles.container}>
                <View style={styles.header}>
                    <Animatable.View animation='slideInDown' duration={1500} style={styles.inner}>
                        <Icon name='search' style={styles.searchicon}>
                        </Icon>
                        <TextInput placeholder='Search' style={styles.textinput}>
                        </TextInput>
                    </Animatable.View>
                </View>
                <FlatList
                    style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
                    data={listItems}
                    renderItem={({ item }) => <Text style={styles.textsearch}>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()} />
            </View>
        );
    }
}

export default Friends;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 80,
        backgroundColor: '#1A759F',
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    inner: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',

    },
    searchicon: {
        fontSize: 24,
    },
    textinput: {
        fontSize: 24,
        marginLeft: 15
    },
    textsearch: {
        padding: 20,
        fontSize: 20,
    },

})