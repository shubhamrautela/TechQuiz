import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Register({ navigation }) {
  // const pressHandler = () => {
  //     navigation.navigate('Login')
  // }

  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Registration</Text>

      <TextInput
        style={styles.textinput}
        placeholder="Enter Your Name" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
      />

      <TextInput
        style={styles.textinput} 
        placeholder="Enter Your Email" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Enter Password" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
      />

      <TextInput
        style={styles.textinput}
        placeholder="Confirm password" placeholderTextColor='white'
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.btntext}
          onPress={() => navigation.navigate("Login")}
        >
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
