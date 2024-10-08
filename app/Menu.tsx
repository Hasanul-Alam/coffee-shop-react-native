import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Menu = () => {
  return (
    <View className="w-[90%] mx-auto">
      {/* Food & Drink Menu */}
      <View>
        <Text className="text-xl font-semibold my-5">Food & Drink Menu</Text>
        {/* Cards */}
        <View className="flex flex-wrap flex-row justify-between w-full">
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/productImage.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/productImage.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/productImage.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/productImage.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/productImage.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/productImage.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Coffee Bean Menu */}
      <View>
        <Text className="text-xl font-semibold mb-5 mt-10">Coffee Bean Menu</Text>
        <View className="flex flex-wrap flex-row justify-between w-full">
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/coffeeBean.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/coffeeBean.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/coffeeBean.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/coffeeBean.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/coffeeBean.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
          <View className="card-container border border-1 border-gray-400 w-[45%] rounded my-2">
            <View className="image-container">
              <Image
                className="max-w-full h-[100px] rounded-t-sm"
                source={require("@/assets/images/shopImages/coffeeBean.jpg")}
              ></Image>
            </View>
            <View className="px-5 py-2">
              <Text className="">Filter Coffee</Text>
              <Text className="text-lg font-semibold">$7.00</Text>
              <Text className="bg-blue-600 text-white text-center py-2 rounded-lg mt-2">
                <FontAwesome name="shopping-cart" size={18}></FontAwesome>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
