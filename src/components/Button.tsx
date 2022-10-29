import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { string } from "prop-types";

export default function Button(props: Prop) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{props.label}</Text>
    </View>
  );
}

interface Prop {
  label: string;
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#467fd3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: "#ffffff",
  },
});
