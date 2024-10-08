import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Banner from "./Banner";
import Menu from "./Menu";
import Footer from "./Footer";
import Login from "./Login";

const Home = () => {
  return (
    <View className="">
      <Banner />
      <Menu />
      <Footer />
      <Login />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
