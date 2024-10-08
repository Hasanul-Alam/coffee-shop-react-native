import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Banner = () => {
  const bannerIcon = "https://i.ibb.co.com/HdtQ6MJ/pfc-clone-67051d3fa621b.png";
  const bannerImage = "../assets/images/shopImages/pfc_clone_67051d3fa621b.png";
  return (
    <View className="bg-[#fae6d1] py-5 min-w-full">
      <View className="w-[35%] mx-auto">
        <Image
          className="max-w-full h-[125px] rounded-xl"
          source={require("@/assets/images/shopImages/bannerIcon.png")}
        />
      </View>
      <Text className="text-2xl text-center">Corner Coffee Shop</Text>
      <Text className="text-center">Best place to get coffee</Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
