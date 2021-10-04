import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home({navigation}){

    return(
        <View style={styles.container}>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity onPress={()=>navigation.navigate('QuizLevel')}><FontAwesome5 name={'python'} size={100} color="black" />
                    <Text >Python-Quiz</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity alignItems='right' style={styles.iconstyle} onPress={() => { alert('lets go to java quiz') }}><FontAwesome5 name={'java'} size={100} color="black" />
                <Text style={{ textAlign: 'right' }}>Java-Quiz</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity onPress={() => { alert('lets go to Css quiz') }}><FontAwesome5 name={'css3-alt'} size={100} color="black" />
                <Text>Css-Quiz</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity alignItems='right' style={styles.iconstyle} onPress={() => { alert('lets go to Html quiz') }}><FontAwesome5 name={'html5'} size={100} color="black" />
                <Text style={{ textAlign: 'right' }}>Html-Quiz</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity onPress={() => { alert('lets go to JavaScript quiz') }}><FontAwesome5 name={'js'} size={100} color="black" />
                <Text>JavaScript-Quiz</Text></TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}>
            <View style={styles.inner}>
                <TouchableOpacity alignItems='right' style={styles.iconstyle} onPress={() => { alert('lets go to C++ quiz') }}><FontAwesome5 name={'cuttlefish'} size={100} color="black" />
                <Text style={{ textAlign: 'right' }}>C++-Quiz</Text></TouchableOpacity>
            </View>
        </View>

    </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#36485f',
        padding: 5,
        flexDirection: 'row',
        flexWrap:'wrap',
        
        
    },
    box: {
        width: '35%',
        height: '22%',
        padding: 1,
        marginLeft: 40,
        marginTop: 60,
        opacity: 0.7

    },
    inner: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 25
    }
});
