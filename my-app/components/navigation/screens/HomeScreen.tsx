import * as React from "react";
import { View, Text } from "react-native";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => alert("this is home page ")}
        style={{ fontSize: 26, fontWeight: 500 }}
      >
        Home Screen
      </Text>
    </View>
  );
}
