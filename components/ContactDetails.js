import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const ContactDetails = ({ navigation, route }) => {
  return (
    <View>
      <Text>{route.params.firstname}</Text>
      <Text>{route.params.lastname}</Text>
      <Text>{route.params.email}</Text>
      <Text>{route.params.phone}</Text>
    </View>
  );
};

export default ContactDetails;
