import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { customers } from "../data/customers";
import { NavigationContainer } from "@react-navigation/native";

const ContactList = ({ navigation }) => {
  const [contacts, setContacts] = useState(customers);
  return (
    <View>
      {contacts.map((customer, idx) => {
        return (
          <TouchableOpacity
            style={styles.user}
            key={idx}
            onPress={() =>
              navigation.navigate("Details", {
                firstname: customer.name.first,
                lastname: customer.name.last,
                email: customer.email,
                phone: customer.phone,
              })
            }
          >
            <View style={styles.userLeft}>
              <View style={styles.square}></View>
              <Text style={styles.userText}>{customer.name.title}</Text>
              <Text style={styles.userText}>{customer.name.first}</Text>
              <Text style={styles.userText}>{customer.name.last}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
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
  userText: {
    maxWidth: "80%",
    paddingRight: "0.5rem",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
  },
});
export default ContactList;
