import React, { useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  
  StyleSheet,
  Text,
  View,
  TextInput,
  
  TouchableOpacity,
  
} from "react-native";

import login from "../functions/login";


import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@save_token'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [token, setToken] = useState('');

  const saveData = async (token) => {
  try {
    setToken(token)
    await AsyncStorage.setItem(STORAGE_KEY, token)

    console.log('Data successfully saved')
  } catch (e) {
    alert('Failed to save the data to the storage')
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tech Quiz</Text>
      <View>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Your Email"
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.button} 
                        onPress={async () => {
                          // uncomment the line below only for testing
                          // navigation.navigate("Home")
                          if(!email || !password){
                            alert("Enter login details")
                            return 
                          }

                          try {
                            const user = await login(email, password)
                            alert('Welcome ' +user.username)
                            // document.cookie = `user=${user.access_token}`
                            // await AsyncStorage.setItem('ACCESS_TOKEN', user.access_token)
                            saveData(user.access_token)
                            navigation.navigate("Home")
                          } catch (error) {
                            alert(error)
                            console.log(error)
                          }
                          
                        }}>
        <Text
          style={styles.btntext}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
        <Text
          style={styles.btntext}
          
        >
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    alignSelf: "stretch",
    alignItems: "center",
    paddingLeft: 80,
    paddingRight: 80,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 80,
    paddingRight: 80,
  },

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    alignContent: "space-between",
    paddingBottom: 50,
  },

  inputView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "80%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    alignContent: "center",
  },

  textinput: {
    alignSelf: "stretch",
    height: 50,
    marginBottom: 20,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 2,
    alignItems: "center",
    paddingTop: 5,
    textAlign: "center",
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    paddingBottom: 20,
    paddingTop: 20,
    color: "#fff",
  },

  button: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
  },

  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
});