import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Banner from "./Banner";
import Menu from "./Menu";
import Footer from "./Footer";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <ScrollView className="">
      <Banner />
      <Menu />
      <Footer />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
