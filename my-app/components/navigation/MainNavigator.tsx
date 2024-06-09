import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
//SCREEN
import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import DetailsScreen from "./screens/DatailsScreen";
import OrdersScreen from "./screens/TicketBooked";

//SECTIONS NAME
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const bookName = "Ticket";

const Tab: any = createBottomTabNavigator();
export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }: any) => {
          let iconName: any;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (rn === bookName) {
            iconName = focused ? "Ticket" : "pricetag-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={detailsName} component={DetailsScreen} />
      <Tab.Screen name={settingsName} component={SettingScreen} />
      <Tab.Screen name={bookName} component={OrdersScreen} />
    </Tab.Navigator>
  );
}
