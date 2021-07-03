import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class InputNumberBtn extends Component {
  render() {
    const { value, handleOnPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handleOnPress(value)}
      >
        <Text style={styles.text}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignContent: "center",
    // color: "#a7a7a7",
  },
  text: {
    fontSize: 40,
    alignContent: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    // color: "#009821",
  },
});
