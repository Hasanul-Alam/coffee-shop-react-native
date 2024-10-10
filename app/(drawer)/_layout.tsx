import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import IndexScreen from "./index";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {
    Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Cart from "../cart";

const Drawer = createDrawerNavigator();

const DrawerLayout = () => {
  return (
    <NavigationContainer independent={true}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTransparent: true,
          }}
        >
          <Drawer.Screen
            name="Home"
            component={IndexScreen}
            options={{
              drawerLabel: "Home",
              title: "Home",
              headerShown: false,
              drawerIcon: () => <FontAwesome name="home" size={30} />,
              drawerLabelStyle: { color: "black", fontSize: 20 },
            }}
          />
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              title: "",
              drawerLabel: "Login",
              drawerLabelStyle: { color: "black", fontSize: 20 },
              drawerIcon: () => (
                <MaterialCommunityIcons name="login" size={30} />
              ),
            }}
          />
          <Drawer.Screen
            name="Registration"
            component={Register}
            options={{
              title: "",
              drawerLabel: "Registration",
              drawerLabelStyle: { color: "black", fontSize: 20 },
              drawerIcon: () => (
                <MaterialIcons name="app-registration" size={30} />
              ),
            }}
          />
          <Drawer.Screen
            name="Cart"
            component={Cart}
            options={{
              title: "",
              drawerLabel: "Cart",
              drawerLabelStyle: { color: "black", fontSize: 20 },
              drawerIcon: () => (
                <Feather name="shopping-cart" size={30} />
              ),
            }}
          />
        </Drawer.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
