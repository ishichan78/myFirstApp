import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { string, func } from "prop-types";

export default function Button(props: Prop) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonLabel} onPress={onPress}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

interface Prop {
  label: string;
  onPress?(): void;
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
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
