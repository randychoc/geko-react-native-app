import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function InputNumberBtn(props) {
  const { value, handleOnPress } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleOnPress(value)}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 40,
    alignContent: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    color: "#a7a7a7",
  },
});
