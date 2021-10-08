import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Scoreboard({navigation}){
    const [scoreData, setScoreData] = useState([])
    const [loading, setLoading] = useState(true)
    let value = 0
    useEffect(()=> {
    fetch(
      `http://techquiz.us-east-1.elasticbeanstalk.com/leaderboard/`
    )
      .then((response) => response.json())
      .then((json) => {
        setScoreData(json)
        })
      .catch((error) => {
        console.error(error);
      })
      .finally(()=> setLoading(false));
 
  
  })


    return(
        <View style={styles.container}>
            <View style={styles.heading}>
<Text style={styles.heading}>Leaderboard</Text>
            </View>
            {scoreData && scoreData.map((user) => {
                return(
                    <View style={styles.box}>
                    <Text style={{color: '#000'}}>
                {`${user.username} - ${user.score}`}
                
                </Text>
                </View>
                )
                
            })}
            
        

    </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#36485f',
        paddingTop: 200,
        flexDirection: 'column',
        flexWrap:'wrap',
        
        
    },
    box: {
        width: '80%',
        height: '5%',
        padding: 1,
        color: 'black',
        marginLeft: 40,
        marginTop: 10,
        opacity: 0.7,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    heading: {
        color: "white",
    fontSize: 42,
    lineHeight: 30,
    margin: 10,
    fontWeight: "bold",
    justifyContent: 'center',
    alignContent: "center",
    padding: 20,
    }
});
