import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";

export default function MemoListScreen(props: any) {
  useEffect(() => {
    const { navigation } = props;
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
});
