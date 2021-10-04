import React from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function Profile({ navigation }) {
  return (
    <View style={styles.profileform}>
      <View style={styles.prof}>
        <View>
          <FontAwesome5
            name={"user-circle"}
            size={100}
            style={{ position: "absolute", top: 10, left: -40 }}
          />
        </View>
        <Text style={styles.header}>Profile</Text>
      </View>

      <View style={styles.info}>
        <Text>Name:</Text>
        <Text style={styles.textinput} underlineColorAndroid={"transparent"} />
        <Text>Email-Id:</Text>
        <Text
          style={styles.textinput}
          placeholder="Email-Id:"
          underlineColorAndroid={"transparent"}
        />
        <Text>Password:</Text>
        <Text
          style={styles.textinput}
          placeholder="Password:"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change-Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit-Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileform: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#36485f",
    paddingLeft: 60,
    paddingRight: 60,
  },
  header: {
    fontSize: 30,
    color: "#fff",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
    position: "absolute",
    left: 165,
    top: 125,
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
    borderRadius: 25,
  },
  btntext: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 200,
  },
  info: {
    flex: 2,
  },
  prof: {
    flex: 2,
    alignItems: "center",
  },
});
