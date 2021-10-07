import React, {useState, useEffect} from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import signup from "../functions/signup";

export default function Register({ navigation }) {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')


useEffect(() => {
  console.log(username, email, password, password2)
}, [username,email, password, password2])
  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Registration</Text>

      <TextInput
        style={styles.textinput}
        placeholder="username" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        onChangeText={(username) => setUsername(username)}

      />

      <TextInput
        style={styles.textinput} 
        placeholder="email" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
                  onChangeText={(email) => setEmail(email)}

      />

      <TextInput
        style={styles.textinput}
        placeholder="password" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}

      />

      <TextInput
        style={styles.textinput}
        placeholder="confirm password" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
        onChangeText={(password2) => setPassword2(password2)}

      />

      <TouchableOpacity style={styles.button}
        
          
          onPress={async () => {
            console.log('hello')
                          if(!username || !email || !password){
                            alert("fill all details")
                            return 
                          }

                          try {
                            const user = await signup(username, email, password)
                            alert('Welcome ' +user.username)
                            navigation.navigate("Login")
                          } catch (error) {
                            //alert(error)
                          }
                          
                        }}
        >
          <Text style={styles.btntext}>
            Sign Up
            </Text>
          
        
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 24,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },

  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
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
