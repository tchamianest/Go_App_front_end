import * as React from "react";
import { View, Text } from "react-native";

export default function SettingScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => navigation.navigate("Details")}
        style={{ fontSize: 26, fontWeight: 500 }}
      >
        Detailspage Screen
      </Text>
    </View>
  );
}
