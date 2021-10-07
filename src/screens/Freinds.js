import { View, StyleSheet, TextInput, FlatList, Text, keyboard } from 'react-native';
import React, {useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage'
 

const listItems = ['Upendra Beth', 'Pratik Gahane', 'Sanket Thakare', 'Harsh Thakur', 'Rohan', 'Rahul','Ritik', 'kirti']


export default function Friends() {
    
    const [searchResults, setSearchResults] = useState([])
    const [keyword, setKeyword] = useState('')
    const [token, setToken] =  useState('')
    const STORAGE_KEY = '@save_token'

    const [friendsList, setFriendsList] = useState([])

    const readData = async () => {
  try {
    const token = await AsyncStorage.getItem(STORAGE_KEY)

    if (token !== null) {
      setToken(token)
      console.log(token)
    }

  } catch (e) {
    alert('Failed to fetch the data from storage')
  }
}

useEffect(()=> {
    readData();
},[])




const getFriends = () => {
    
fetch(
      `http://techquiz.us-east-1.elasticbeanstalk.com/user/friend/get`,
      {
          headers: {"Authorization" : `Bearer ${token}`}
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log('this is the friend list',json)
        setFriendsList(json)
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error('error in friends',error);
      })
      .finally();
}



const getResults = () => {
    console.log('token is', token)
fetch(
      `http://techquiz.us-east-1.elasticbeanstalk.com/user/friend/search?username=${keyword}`,
      {
          headers: {"Authorization" : `Bearer ${token}`}
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setSearchResults(json)
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      })
      .finally();
}


useEffect(()=> {
    
    getFriends()
},[token, keyword])

    useEffect(() => {
            let timer1 = setTimeout(() => getResults(), 500);

      return () => {
        clearTimeout(timer1);
      };
    }, [keyword])

        return (
            <View styles={styles.container}>
                <View style={styles.header}>
                    <Animatable.View animation='slideInDown' duration={1500} style={styles.inner}>
                        <Icon name='search' style={styles.searchicon}>
                        </Icon>
                        <TextInput placeholder='Search' style={styles.textinput}
                        onChangeText = {(text) => setKeyword(text)}
                        >
                            {keyword}
                        </TextInput>
                    </Animatable.View>
                </View>
                <View>
                    
                {
                    console.log(keyword.length) &&
                    keyword.length > 0 ? 
                    searchResults.length > 0 && 
                   
                    searchResults.map((name)=> {
                        return(

                        
                            <View style={styles.listItem}>
                                <Text style={{color: 'white', fontSize: 20}}>
                                    {name.username}
                                </Text>
                                <Text style={{color: 'white', fontSize: 20}}>
                                    {name.score}
                                </Text>
                                
                                </View>
                        )
                    })

                    
                    : <View style={{backgroundColor: 'red'}}>
                        {  friendsList.length > 0 && friendsList.map((friend) => {
                            <View style={styles.listItem}>
                                <Text style={{color: 'white', fontSize: 20}}>{friend.username}</Text>
                                </View>
                        })}
                    </View>
                    
                }
            </View>
                
            </View>
        );
    }




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

    listItem: {
        margin: 20,
        height: 50,
        padding: 20,
        fontWeight: '500',
        fontSize: 40,
        color: 'black',
        backgroundColor: '#432692',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
    }

})