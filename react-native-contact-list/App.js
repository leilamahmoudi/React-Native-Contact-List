import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ContactList from "./components/ContactList";
import { customers } from "./data/customers";

export default function App() {
  const [users, setUsers] = useState(customers);

  return (
    <View style={styles.container}>
      <View style={styles.usersWrapper}>
        <Text style={styles.sectionTitle}>Contact List</Text>
        {users.map((user, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => console.log(user)}>
              <ContactList user={user} />
            </TouchableOpacity>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    marginLeft: 20,
  },
  usersWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
