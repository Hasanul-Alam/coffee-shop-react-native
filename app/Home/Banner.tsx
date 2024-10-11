import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type DrawerNavigation = DrawerNavigationProp<any>;

const Banner = () => {
  // Images and Icons
  const bannerIcon = "https://i.ibb.co.com/HdtQ6MJ/pfc-clone-67051d3fa621b.png";
  const bannerImage = "../assets/images/shopImages/pfc_clone_67051d3fa621b.png";

  const navigation = useNavigation<DrawerNavigation>();
  return (
    <View className="bg-[#fae6d1] py-14 min-w-full">
      {/* Top menu bar */}
      <View className="w-[90%] mx-auto">
        <View className="flex-row justify-between mb-7">
          <View>
            <Entypo
              name="menu"
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          </View>
          <View className="flex-row items-center gap-4">
            <Link href="/cart">
              <Entypo name="shopping-cart" size={25} />
            </Link>
            <FontAwesome6 name="discord" size={22} />
          </View>
        </View>

        {/* Image & Title */}
        <View className="w-[40%] mx-auto">
          <Image
            className="max-w-full h-[125px] rounded-xl"
            source={require("@/assets/images/shopImages/bannerIcon.png")}
          />
        </View>
        <Text className="text-2xl text-center">Corner Coffee Shop</Text>
        <Text className="text-center">Best place to get coffee</Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
