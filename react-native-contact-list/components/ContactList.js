import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ContactList = (props) => {
  return (
    <View style={styles.user}>
      <View style={styles.userLeft}>
        <View style={styles.square}></View>
        <Text style={styles.userText}>{props.user.name.title} </Text>
        <Text style={styles.userText}>{props.user.name.first}</Text>
        <Text style={styles.userText}>{props.user.name.last}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#CDC2AE",
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
  },
  userText: { maxWidth: "80%" },
});

export default ContactList;
